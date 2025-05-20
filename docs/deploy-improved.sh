#!/bin/bash

echo "=== Deploy Aprimorado para GitHub Pages ==="
echo "Repositório: https://github.com/anderson-ufrj/UaiSINT"
echo ""

# Validação prévia
echo "Executando validação..."
bash ./docs/validate.sh

echo ""
read -p "Deseja continuar com o deploy? (s/n): " continue
if [[ ! "$continue" =~ ^[Ss]$ ]]; then
    echo "Deploy cancelado."
    exit 0
fi

# Verificar se há alterações não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo ""
    echo "Existem alterações não commitadas."
    git status
    
    echo ""
    read -p "Deseja adicionar e commitar todas as alterações? (s/n): " addcommit
    if [[ "$addcommit" =~ ^[Ss]$ ]]; then
        read -p "Mensagem de commit: " commitmsg
        if [ -z "$commitmsg" ]; then
            commitmsg="Atualiza conteúdo e corrige configurações"
        fi
        
        git add .
        git commit -m "$commitmsg"
        
        if [ $? -ne 0 ]; then
            echo "❌ Erro ao commitar as alterações."
            exit 1
        else
            echo "✅ Alterações commitadas com sucesso."
        fi
    else
        echo "As alterações não foram commitadas. Faça isso manualmente antes do deploy."
        exit 0
    fi
fi

# Verifica se o remote já existe
if git remote get-url origin > /dev/null 2>&1; then
    echo "Remote 'origin' já existe."
else
    echo "Adicionando repositório remoto..."
    git remote add origin https://github.com/anderson-ufrj/UaiSINT.git
fi

# Push para o GitHub
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

read -p "Deseja fazer push agora? (s/n): " dopush
if [[ "$dopush" =~ ^[Ss]$ ]]; then
    git push -u origin main
    
    if [ $? -ne 0 ]; then
        echo "❌ Erro ao fazer push para o GitHub."
        exit 1
    else
        echo "✅ Push realizado com sucesso."
    fi
else
    echo "Quando estiver pronto, execute:"
    echo "git push -u origin main"
fi

echo ""
echo "Após o push, ative o GitHub Pages em:"
echo "https://github.com/anderson-ufrj/UaiSINT/settings/pages"
echo ""
echo "Configure a fonte para: 'Deploy from a branch' e selecione a branch 'main'"
echo ""
echo "Seu site estará disponível em:"
echo "https://anderson-ufrj.github.io/UaiSINT/"