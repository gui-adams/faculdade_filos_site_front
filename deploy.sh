#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/home/adams/faculdade_filos_site_front"
BRANCH="main"
ORIGIN_URL="https://github.com/gui-adams/faculdade_filos_site_front.git"

# Onde você pode guardar o .env fora do projeto (recomendado)
SECRETS_ENV="/home/adams/secrets/faculdade_filos/.env"

# Certificados esperados (Cloudflare Origin / Nginx)
CERT_DIR="$APP_DIR/nginx/certs"
CERT_PEM="$CERT_DIR/cert.pem"
KEY_PEM="$CERT_DIR/key.pem"

ts() { date -Iseconds; }
die() { echo "==> ERRO: $*" >&2; exit 1; }

echo "==> Iniciando deploy em: $(ts)"
echo "==> Host: $(hostname) | Usuário: $(whoami)"

# (Recomendado) não rodar como root; use sudo apenas para docker se precisar.
if [[ "$(id -u)" -eq 0 ]]; then
  die "não rode este deploy como root. Use o usuário 'adams' (e use sudo apenas onde necessário)."
fi

echo "==> Indo para o diretório do projeto: $APP_DIR"
cd "$APP_DIR" || die "diretório do projeto não existe: $APP_DIR"

echo "==> Checando se é repositório git..."
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || die "não é um repositório git: $APP_DIR"

echo "==> Validando remote origin..."
remote_url="$(git remote get-url origin || true)"
[[ "$remote_url" == "$ORIGIN_URL" ]] || die "origin incorreto: '$remote_url' (esperado: '$ORIGIN_URL')"

echo "==> Buscando últimas alterações de origin..."
git fetch --prune origin

echo "==> Garantindo branch $BRANCH..."
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> Limpando arquivos não rastreados, MAS preservando .env e nginx/certs/ (cert.pem/key.pem)..."
# IMPORTANTÍSSIMO: -e tem que excluir a pasta E o conteúdo
git clean -fdx \
  -e ".env" \
  -e "nginx/certs" \
  -e "nginx/certs/**" \
  -e "nginx/certs/*"

echo "==> Garantindo .env (sem apagar)..."
if [[ ! -f "$APP_DIR/.env" ]]; then
  if [[ -f "$SECRETS_ENV" ]]; then
    echo "==> .env não existe no projeto. Criando symlink a partir de: $SECRETS_ENV"
    ln -s "$SECRETS_ENV" "$APP_DIR/.env"
  else
    die ".env não encontrado. Crie em '$APP_DIR/.env' ou em '$SECRETS_ENV'."
  fi
fi

echo "==> Verificando certificados do Nginx (cert.pem/key.pem)..."
if [[ ! -f "$CERT_PEM" || ! -f "$KEY_PEM" ]]; then
  echo "==> Certificados não encontrados:"
  echo "    - $CERT_PEM"
  echo "    - $KEY_PEM"
  die "crie os arquivos acima (NÃO versionar) e rode novamente."
fi

echo "==> Ajustando permissões seguras dos certificados (sem apagar)..."
# tenta ajustar com sudo (recomendado), se não tiver sudo, tenta direto
if command -v sudo >/dev/null 2>&1; then
  sudo chmod 644 "$CERT_PEM" || true
  sudo chmod 600 "$KEY_PEM" || true
else
  chmod 644 "$CERT_PEM" || true
  chmod 600 "$KEY_PEM" || true
fi

echo "==> Escolhendo comando do Docker (docker ou sudo docker)..."
DOCKER="docker"
if ! docker ps >/dev/null 2>&1; then
  if command -v sudo >/dev/null 2>&1 && sudo -n docker ps >/dev/null 2>&1; then
    DOCKER="sudo docker"
  else
    die "sem permissão no Docker. Solução: 'sudo usermod -aG docker adams' + logout/login, ou rode com sudo."
  fi
fi

echo "==> Subindo containers com build atualizado..."
$DOCKER compose up -d --build

echo "==> Containers em execução:"
$DOCKER compose ps

echo "==> Deploy concluído com sucesso! 🎉"
