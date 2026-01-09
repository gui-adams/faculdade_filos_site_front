#!/usr/bin/env bash
set -Eeuo pipefail

# ===== Segurança básica do shell =====
umask 027
export PATH="/usr/sbin:/usr/bin:/sbin:/bin"

APP_DIR="/root/faculdade_filos_site_front"
BRANCH="main"

# Repo esperado (aceita HTTPS e SSH)
EXPECTED_REMOTE_HTTPS="https://github.com/gui-adams/faculdade_filos_site_front.git"
EXPECTED_REMOTE_SSH="git@github.com:gui-adams/faculdade_filos_site_front.git"

LOCK_FILE="/var/lock/faculdade-filos-deploy.lock"
LOG_FILE="/var/log/faculdade-filos-deploy.log"

mkdir -p "$(dirname "$LOCK_FILE")" "$(dirname "$LOG_FILE")"
exec > >(tee -a "$LOG_FILE") 2>&1

echo "==> Iniciando deploy em: $(date -Is)"
echo "==> Host: $(hostname) | Usuário: $(id -un)"

# ===== Evita deploy concorrente =====
exec 9>"$LOCK_FILE"
if ! flock -n 9; then
  echo "ERRO: Já existe um deploy em andamento (lock em $LOCK_FILE)."
  exit 1
fi

echo "==> Indo para o diretório do projeto: $APP_DIR"
cd "$APP_DIR"

# ===== Verificações do repositório =====
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "ERRO: $APP_DIR não parece ser um repositório git."
  exit 1
fi

# Evita problemas com safe.directory e configs globais estranhas
git config --global --add safe.directory "$APP_DIR" >/dev/null 2>&1 || true

echo "==> Verificando remoto origin..."
ORIGIN_URL="$(git remote get-url origin 2>/dev/null || true)"
echo "origin: $ORIGIN_URL"

if [[ -z "${ORIGIN_URL}" ]]; then
  echo "ERRO: remoto 'origin' não encontrado."
  exit 1
fi

if [[ "${ORIGIN_URL}" != "${EXPECTED_REMOTE_HTTPS}" && "${ORIGIN_URL}" != "${EXPECTED_REMOTE_SSH}" ]]; then
  echo "ERRO: remoto origin DIFERE do esperado."
  echo "Esperado (HTTPS): $EXPECTED_REMOTE_HTTPS"
  echo "Esperado (SSH):   $EXPECTED_REMOTE_SSH"
  echo "Atual:            $ORIGIN_URL"
  echo "ABORTANDO para evitar deploy de repo sequestrado."
  exit 1
fi

# ===== Git sem hooks (crítico se houve invasão) =====
GIT_NO_HOOKS=(-c core.hooksPath=/dev/null)

echo "==> Buscando últimas alterações de origin (sem hooks)..."
git "${GIT_NO_HOOKS[@]}" fetch --prune origin

echo "==> Checando branch alvo..."
git "${GIT_NO_HOOKS[@]}" checkout -f "$BRANCH"

echo "==> Resetando para origin/$BRANCH (descarta alterações locais)..."
git "${GIT_NO_HOOKS[@]}" reset --hard "origin/$BRANCH"

echo "==> Limpando arquivos não rastreados (remove coisas injetadas)..."
# Preserve o que você precisa manter no servidor (ajuste se tiver outras pastas persistentes)
git "${GIT_NO_HOOKS[@]}" clean -fdx \
  -e ".env" -e ".env.*" \
  -e "uploads/" -e "storage/" -e "data/" \
  || true

echo "==> (Opcional) Submódulos..."
git "${GIT_NO_HOOKS[@]}" submodule update --init --recursive || true

# ===== Validação do Compose antes de subir =====
echo "==> Validando docker compose..."
docker compose config -q

echo "==> Atualizando imagens base (pull)..."
docker compose pull --ignore-pull-failures || true

echo "==> Subindo containers com build atualizado (pull no build)..."
DOCKER_BUILDKIT=1 docker compose up -d --build --pull always --remove-orphans

echo "==> Containers em execução:"
docker compose ps

echo "==> Commit deployado:"
git rev-parse --short HEAD
git log -1 --pretty=format:"%h | %an | %ad | %s" --date=iso

echo "==> Deploy concluído com sucesso! ✅"
