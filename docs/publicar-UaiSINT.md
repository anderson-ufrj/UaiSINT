# Publicar no Repositório UaiSINT

## Repositório Correto
https://github.com/anderson-ufrj/UaiSINT

## Passos para Publicar

### 1. Criar um Token (se ainda não tem)
1. Acesse: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Nome: "UaiSINT Deploy"
4. Marque: ✅ repo
5. Generate token
6. **COPIE O TOKEN**

### 2. Fazer o Push
```bash
git push -u origin main
```

Quando pedir:
- Username: `anderson-ufrj`
- Password: **Cole seu token**

### 3. Ativar GitHub Pages
1. Acesse: https://github.com/anderson-ufrj/UaiSINT/settings/pages
2. Configure:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
3. Save

### 4. URL Final
https://anderson-ufrj.github.io/UaiSINT/

## Se Der Erro 403

### Opção 1: Verifique as permissões do token
- O token precisa ter permissão `repo`
- Crie um novo token se necessário

### Opção 2: Force push (sobrescreve tudo)
```bash
git push -f origin main
```

### Opção 3: Verifique se você tem acesso
- Acesse: https://github.com/anderson-ufrj/UaiSINT
- Você consegue ver o repositório?
- Você é colaborador ou dono?

## Comandos Prontos

```bash
# Se precisar configurar novamente
git remote remove origin
git remote add origin https://github.com/anderson-ufrj/UaiSINT.git

# Push normal
git push -u origin main

# Push forçado (cuidado!)
git push -f origin main
```