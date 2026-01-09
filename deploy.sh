#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/home/adams/faculdade_filos_site_front"
BRANCH="main"
EXPECTED_ORIGIN="https://github.com/gui-adams/faculdade_filos_site_front.git"

echo "==> Iniciando deploy em: $(date -Iseconds)"
echo "==> Host: $(hostname) | Usuário: $(whoami)"

if [[ "$(id -u)" -eq 0 ]]; then
  echo "==> ERRO: não rode este deploy como root. Use o usuário 'adams'."
  echo "==> Dica: cd $APP_DIR && ./deploy.sh"
  exit 1
fi

echo "==> Indo para o diretório do projeto: $APP_DIR"
cd "$APP_DIR"

echo "==> Checando se é repositório git..."
git rev-parse --is-inside-work-tree >/dev/null

echo "==> Validando remote origin..."
ORIGIN_URL="$(git remote get-url origin || true)"
if [[ "$ORIGIN_URL" != "$EXPECTED_ORIGIN" ]]; then
  echo "==> ERRO: remote origin inesperado!"
  echo "==> Esperado: $EXPECTED_ORIGIN"
  echo "==> Atual:     $ORIGIN_URL"
  exit 1
fi

echo "==> Buscando últimas alterações de origin..."
git fetch --prune origin

echo "==> Garantindo branch $BRANCH..."
git checkout -f "$BRANCH"

echo "==> Resetando para origin/$BRANCH (descarta alterações locais versionadas)..."
git reset --hard "origin/$BRANCH"

echo "==> Limpando arquivos não rastreados, MAS preservando .env e nginx/certs/ ..."
# -d: inclui diretórios
# -f: força
# -x: inclui ignorados pelo .gitignore (bom para limpar build/lixo)
# -e: exclui do clean (preserva)
git clean -fdx \
  -e .env \
  -e nginx/certs \
  -e nginx/certs/**

echo "==> Garantindo permissões seguras dos certificados (se existirem)..."
if [[ -f "nginx/certs/privkey.pem" ]]; then
  chmod 600 nginx/certs/privkey.pem || true
fi
if [[ -f "nginx/certs/fullchain.pem" ]]; then
  chmod 644 nginx/certs/fullchain.pem || true
fi

echo "==> Verificando se .env existe..."
if [[ ! -f ".env" ]]; then
  echo "==> ERRO: .env não encontrado em $APP_DIR/.env"
  echo "==> Crie o arquivo .env (fora do git) e rode novamente."
  exit 1
fi

echo "==> Subindo containers com build atualizado..."
docker compose up -d --build

echo "==> Containers em execução:"
docker compose ps

echo "==> Deploy concluído com sucesso! 🎉"
