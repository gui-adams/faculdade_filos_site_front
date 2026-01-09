#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# ========= CONFIG =========
APP_DIR="/home/adams/faculdade_filos_site_front"
BRANCH="main"
EXPECTED_REMOTE_URL="https://github.com/gui-adams/faculdade_filos_site_front.git"

# Docker compose: tenta plugin novo, cai pro legado se precisar
DC() {
  if command -v docker >/dev/null 2>&1 && docker compose version >/dev/null 2>&1; then
    docker compose "$@"
  else
    docker-compose "$@"
  fi
}

log() { echo "==> $*"; }

log "Iniciando deploy em: $(date -Iseconds)"
log "Host: $(hostname) | Usuário: $(whoami)"

# ========= SAFETY CHECKS =========
if [[ "$(id -u)" -eq 0 ]]; then
  log "ERRO: não rode este deploy como root. Use o usuário 'adams'."
  log "Dica: saia do root e rode: cd $APP_DIR && ./deploy.sh"
  exit 1
fi

log "Indo para o diretório do projeto: $APP_DIR"
cd "$APP_DIR"

log "Checando se o diretório é um repositório git..."
git rev-parse --is-inside-work-tree >/dev/null

log "Validando remote origin..."
ORIGIN_URL="$(git remote get-url origin || true)"
if [[ "$ORIGIN_URL" != "$EXPECTED_REMOTE_URL" && "$ORIGIN_URL" != "${EXPECTED_REMOTE_URL/https:\/\/github.com\//git@github.com:}" ]]; then
  log "ERRO: remote origin inesperado."
  log "Encontrado: $ORIGIN_URL"
  log "Esperado:  $EXPECTED_REMOTE_URL"
  exit 1
fi

log "Buscando últimas alterações de origin..."
git fetch --prune origin

log "Garantindo branch $BRANCH..."
git checkout -f "$BRANCH"

log "Resetando para origin/$BRANCH (descarta alterações locais)..."
git reset --hard "origin/$BRANCH"

log "Limpando arquivos não rastreados (hard clean) para evitar lixo/artefatos..."
git clean -fdx

log "(Opcional) Atualizando submódulos..."
git submodule update --init --recursive || true

log "Subindo containers com build atualizado..."
DC up -d --build --remove-orphans

log "Containers em execução:"
DC ps

log "Deploy concluído com sucesso! 🎉"
