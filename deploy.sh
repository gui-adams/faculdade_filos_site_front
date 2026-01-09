#!/usr/bin/env bash
set -euo pipefail

# --- CONFIGURAÇÃO ---
APP_DIR="/home/adams/faculdade_filos_site_front"
BRANCH="main"
ORIGIN_URL="https://github.com/gui-adams/faculdade_filos_site_front.git"
SECRETS_DIR="/home/adams/secrets/faculdade_filos"
SECRETS_ENV="$SECRETS_DIR/.env"

CERT_DIR="$APP_DIR/nginx/certs"
CERT_PEM="$CERT_DIR/cert.pem"
KEY_PEM="$CERT_DIR/key.pem"

ts() { date -Iseconds; }
log() { echo "==> [$(ts)] $*"; }
die() { echo "==> [$(ts)] ERRO: $*" >&2; exit 1; }

log "Iniciando deploy no host: $(hostname) | Usuário: $(whoami)"

# 1. SEGURANÇA: Validar se não é root
if [[ "$(id -u)" -eq 0 ]]; then
  die "Não rode este deploy como root. Utilize o utilizador 'adams'."
fi

cd "$APP_DIR" || die "Diretório $APP_DIR não encontrado."

# 2. GIT: Sincronização Segura
log "Atualizando código do repositório..."
git fetch --prune origin
git checkout -f "$BRANCH"
git reset --hard "origin/$BRANCH"

# 3. LIMPEZA: Remover ficheiros desnecessários (Exceto Certificados e Env)
log "Limpando ficheiros não rastreados..."
git clean -fdx -e ".env" -e "nginx/certs/"

# 4. SEGREDOS: Garantir .env seguro
if [[ ! -f ".env" ]]; then
    if [[ -f "$SECRETS_ENV" ]]; then
        log "Linkando .env de diretório seguro..."
        ln -sf "$SECRETS_ENV" ".env"
    else
        die "Ficheiro .env não encontrado em $SECRETS_ENV"
    fi
fi
chmod 600 .env # Apenas o dono pode ler o ficheiro de segredos

# 5. CERTIFICADOS: Ajuste de Permissões (Resolve o erro 'Permission Denied')
log "Validando e protegendo certificados..."
if [[ ! -f "$CERT_PEM" || ! -f "$KEY_PEM" ]]; then
    die "Certificados ausentes em $CERT_DIR"
fi

# Garante que o utilizador adams é o dono e protege as chaves
sudo chown -R adams:adams "$CERT_DIR"
chmod 755 "$CERT_DIR"
chmod 644 "$CERT_PEM"
chmod 600 "$KEY_PEM" # Chave privada deve ser estritamente privada

# 6. DOCKER: Build e Cleanup
log "Iniciando Build e Update dos containers..."
# --pull garante que a imagem base (node:alpine) está atualizada com patches de segurança
docker compose build --pull --no-cache 
docker compose up -d --remove-orphans

# 7. MANUTENÇÃO: Limpar imagens antigas (Dangling Images)
log "Limpando cache de build antigo para libertar espaço..."
docker image prune -f

log "Deploy concluído com sucesso! 🎉"