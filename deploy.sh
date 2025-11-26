#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/root/faculdade_filos_site_front"
BRANCH="main"

echo "==> Indo para o diretório do projeto: $APP_DIR"
cd "$APP_DIR"

echo "==> Verificando se o repositório é o correto..."
git remote -v

echo "==> Buscando últimas alterações de origin..."
git fetch origin

echo "==> Resetando para origin/$BRANCH (DESCARTA alterações locais não commitadas)..."
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> (Opcional) Atualizando submódulos (se um dia tiver)..."
git submodule update --init --recursive || true

echo "==> Subindo containers com build atualizado..."
docker compose up --build -d

echo "==> Containers em execução:"
docker compose ps

echo "==> Deploy concluído com sucesso! 🎉"
