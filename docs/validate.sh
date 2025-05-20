#!/bin/bash

echo "=== Validando configuração do projeto UaiSINT ==="
echo "Verificando estrutura de arquivos..."

# Verifica arquivos essenciais
declare -a files=("index.html" "presentation.html" "website.html" "js/translations.js" "_config.yml")
missing=0

for file in "${files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Arquivo não encontrado: $file"
        missing=$((missing+1))
    else
        echo "✅ Arquivo presente: $file"
    fi
done

# Verifica pastas essenciais
declare -a dirs=("assets" "js" "docs")
for dir in "${dirs[@]}"; do
    if [ ! -d "$dir" ]; then
        echo "❌ Diretório não encontrado: $dir"
        missing=$((missing+1))
    else
        echo "✅ Diretório presente: $dir"
    fi
done

# Verifica a presença dos novos assets
if [ ! -f "assets/ruvixxlogo.png" ]; then
    echo "❌ Logo da Ruvixx não encontrada"
    missing=$((missing+1))
else
    echo "✅ Logo da Ruvixx presente"
fi

# Verifica se as traduções contêm as novas entradas
if grep -q "stats:" js/translations.js && grep -q "intro:" js/translations.js && grep -q "compliance:" js/translations.js; then
    echo "✅ Novas traduções de compliance encontradas"
else
    echo "❌ Novas traduções de compliance não encontradas"
    missing=$((missing+1))
fi

# Verifica se o presentation.html inclui o script de traduções
if grep -q '<script src="./js/translations.js"></script>' presentation.html; then
    echo "✅ Script de traduções incluído no presentation.html"
else
    echo "❌ Script de traduções não encontrado no presentation.html"
    missing=$((missing+1))
fi

# Verifica status do Git
echo ""
echo "Verificando configuração Git..."
if git remote -v | grep -q "github.com/anderson-ufrj/UaiSINT"; then
    echo "✅ Repositório GitHub configurado corretamente"
else
    echo "❌ Repositório GitHub não configurado corretamente"
    missing=$((missing+1))
fi

# Verifica se há alterações não commitadas
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️ Existem alterações não commitadas"
    git status --porcelain
else
    echo "✅ Não há alterações pendentes"
fi

echo ""
if [ $missing -eq 0 ]; then
    echo "✅ Todos os arquivos e configurações validados com sucesso!"
else
    echo "❌ Foram encontrados $missing problemas que precisam ser corrigidos."
fi

echo ""
echo "Recomendações:"
echo "1. Execute 'chmod +x docs/validate.sh' para tornar este script executável"
echo "2. Execute 'git add .' para adicionar todas as alterações"
echo "3. Execute 'git commit -m \"Atualiza conteúdo sobre compliance e traduções\"' para commitar"
echo "4. Execute 'git push origin main' para enviar as alterações para o GitHub"
echo "5. Verifique se o GitHub Pages está ativado em: https://github.com/anderson-ufrj/UaiSINT/settings/pages"