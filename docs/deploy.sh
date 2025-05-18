#!/bin/bash

echo "=== Deploy para GitHub Pages ==="
echo "Repositório: https://github.com/anderson-ufrj/UaiSINT"
echo ""

# Verifica se o remote já existe
if git remote get-url origin > /dev/null 2>&1; then
    echo "Remote 'origin' já existe. Removendo..."
    git remote remove origin
fi

# Adiciona o remote
echo "Adicionando repositório remoto..."
git remote add origin https://github.com/anderson-ufrj/UaiSINT.git

echo ""
echo "Para continuar, você precisará:"
echo "1. Seu username do GitHub (anderson-ufrj)"
echo "2. Um Personal Access Token (não sua senha!)"
echo ""
echo "Para criar um token:"
echo "1. Acesse: https://github.com/settings/tokens"
echo "2. Clique em 'Generate new token'"
echo "3. Marque 'repo' nas permissões"
echo "4. Copie o token gerado"
echo ""
echo "Quando estiver pronto, execute:"
echo "git push -u origin main"
echo ""
echo "Após o push, ative o GitHub Pages em:"
echo "https://github.com/anderson-ufrj/UaiSINT/settings/pages"
echo ""
echo "Seu site estará disponível em:"
echo "https://anderson-ufrj.github.io/UaiSINT/"