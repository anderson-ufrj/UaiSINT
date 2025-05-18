# Passo a Passo - Publicar no GitHub Pages

## 1. Criar Token de Acesso

1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Nome: "UaiSINT Deploy"
4. Expiração: Escolha um prazo
5. Marque as permissões:
   - ✅ repo (todas as sub-opções)
6. Clique em "Generate token"
7. **COPIE O TOKEN** (você só verá uma vez!)

## 2. Configurar Git Local

```bash
# Configure suas credenciais
git config --global user.name "anderson-ufrj"
git config --global user.email "seu-email@gmail.com"

# Adicione o repositório remoto
git remote add origin https://github.com/anderson-ufrj/UaiSINT.git
```

## 3. Enviar o Código

```bash
# Envie para o GitHub
git push -u origin main
```

Quando solicitado:
- Username: `anderson-ufrj`
- Password: **Cole o TOKEN** (não sua senha!)

## 4. Ativar GitHub Pages

1. Acesse o repositório: https://github.com/anderson-ufrj/UaiSINT
2. Clique em ⚙️ **Settings**
3. No menu lateral, clique em **Pages**
4. Configure:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Clique em **Save**

## 5. Aguardar Deploy

- O GitHub levará alguns minutos
- Um ✅ verde aparecerá quando estiver pronto
- URL final: https://anderson-ufrj.github.io/UaiSINT/

## Problemas Comuns

### Se der erro no push:

**Opção 1 - Forçar push (sobrescreve tudo):**
```bash
git push -f origin main
```

**Opção 2 - Mesclar com conteúdo existente:**
```bash
git pull origin main --allow-unrelated-histories
git push origin main
```

### Se o site não aparecer:

1. Verifique se o GitHub Pages está ativo
2. Certifique-se de que tem um arquivo `index.html`
3. Aguarde até 10 minutos
4. Force refresh: Ctrl+F5

## Estrutura Correta

```
UaiSINT/
├── index.html         ✅ (obrigatório)
├── presentation.html
├── website.html
├── assets/
│   └── imagens...
└── README.md
```