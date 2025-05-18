# Criar Repositório UAISINT - Guia Completo

## 1. Criar o Repositório no GitHub

**Link direto**: https://github.com/new

Preencha assim:
- **Repository name**: `uaisint`
- **Description**: `Apresentação interativa sobre IA & OSINT - Grupo UAISINT MG`
- **Public**: ✅ (marcar)
- **Initialize this repository with**: ❌ (NÃO marcar nada)
- Clique em **Create repository**

## 2. Links que você vai acessar

### Durante a criação:
1. **Criar repositório**: https://github.com/new
2. **Seus repositórios**: https://github.com/anderson-ufrj?tab=repositories
3. **Novo repo criado**: https://github.com/anderson-ufrj/uaisint

### Após criar o repositório:

Execute estes comandos no terminal:

```bash
# Remove o remote antigo
git remote remove origin

# Adiciona o novo repositório
git remote add origin https://github.com/anderson-ufrj/uaisint.git

# Envia o código
git push -u origin main
```

## 3. Configurar GitHub Pages

**Link direto**: https://github.com/anderson-ufrj/uaisint/settings/pages

Configure:
- **Source**: Deploy from a branch
- **Branch**: main
- **Folder**: / (root)
- Clique em **Save**

## 4. URLs Finais

### Repositório:
https://github.com/anderson-ufrj/uaisint

### Site publicado:
https://anderson-ufrj.github.io/uaisint/

## 5. Verificar Deploy

**Link do Actions**: https://github.com/anderson-ufrj/uaisint/actions

- Aguarde o check verde ✅
- O site estará disponível em minutos

## Resumo dos Links:

1. **Criar**: https://github.com/new
2. **Repositório**: https://github.com/anderson-ufrj/uaisint
3. **Settings/Pages**: https://github.com/anderson-ufrj/uaisint/settings/pages
4. **Site final**: https://anderson-ufrj.github.io/uaisint/

## Observações Importantes

- Nome do repositório: `uaisint` (tudo minúsculo)
- Certifique-se de estar logado como `anderson-ufrj`
- Use um Personal Access Token ao fazer push
- O arquivo `index.html` é obrigatório