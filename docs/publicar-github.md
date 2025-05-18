# Como Publicar no Repositório Existente UaiSINT

## Opção 1: Usando HTTPS (Recomendado para iniciantes)

1. **Configure suas credenciais do GitHub**:
   ```bash
   git config --global user.name "anderson-ufrj"
   git config --global user.email "seu-email@example.com"
   ```

2. **Adicione o repositório remoto**:
   ```bash
   git remote add origin https://github.com/anderson-ufrj/UaiSINT.git
   ```

3. **Envie o código**:
   ```bash
   git push -u origin main
   ```
   
   Quando solicitado:
   - Username: `anderson-ufrj`
   - Password: Seu token de acesso pessoal (não a senha da conta)

## Opção 2: Usando SSH (Mais seguro)

1. **Configure SSH** (se ainda não tiver):
   ```bash
   ssh-keygen -t ed25519 -C "seu-email@example.com"
   cat ~/.ssh/id_ed25519.pub
   ```
   Copie a chave e adicione em: https://github.com/settings/keys

2. **Adicione o repositório remoto com SSH**:
   ```bash
   git remote add origin git@github.com:anderson-ufrj/UaiSINT.git
   ```

3. **Envie o código**:
   ```bash
   git push -u origin main
   ```

## Ativar GitHub Pages

1. Acesse: https://github.com/anderson-ufrj/UaiSINT/settings/pages
2. Em "Source", selecione: "Deploy from a branch"
3. Em "Branch", selecione: "main"
4. Em "Folder", selecione: "/ (root)"
5. Clique em "Save"

## URL Final

Após alguns minutos, seu site estará disponível em:
https://anderson-ufrj.github.io/UaiSINT/

## Caso o repositório já tenha conteúdo

Se o repositório já tiver arquivos, você pode:

1. **Fazer fetch primeiro**:
   ```bash
   git fetch origin
   git merge origin/main --allow-unrelated-histories
   ```

2. **Ou forçar o push (CUIDADO: sobrescreve tudo)**:
   ```bash
   git push -f origin main
   ```

## Criando um Token de Acesso Pessoal

1. Vá em: https://github.com/settings/tokens
2. Clique em "Generate new token"
3. Dê um nome descritivo
4. Selecione as permissões: `repo` (todas)
5. Clique em "Generate token"
6. Copie o token (você só verá uma vez!)
7. Use este token como senha ao fazer push