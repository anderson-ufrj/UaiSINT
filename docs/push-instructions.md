# Instruções para Enviar as Alterações para o GitHub

Como o push automático não foi possível devido à necessidade de autenticação, siga estas instruções para completar o processo manualmente:

## Opção 1: Push com Autenticação HTTPS

1. Execute o comando push com seu nome de usuário:
   ```bash
   git push https://anderson-ufrj@github.com/anderson-ufrj/UaiSINT.git main
   ```

2. Quando solicitado, insira seu token de acesso pessoal (não sua senha regular do GitHub).
   - Para criar um token, acesse: https://github.com/settings/tokens
   - Selecione "Generate new token"
   - Marque a opção "repo" para dar acesso completo ao repositório
   - Clique em "Generate token" e copie o token gerado

## Opção 2: Configurar Credenciais em Cache

1. Configure o Git para armazenar suas credenciais:
   ```bash
   git config --global credential.helper cache
   ```

2. Em seguida, tente novamente o push:
   ```bash
   git push origin main
   ```

3. Insira seu nome de usuário e token de acesso pessoal quando solicitado.

## Opção 3: Usar SSH em vez de HTTPS

1. Verifique se você tem uma chave SSH configurada:
   ```bash
   ls -la ~/.ssh
   ```

2. Se não tiver uma chave, crie uma:
   ```bash
   ssh-keygen -t ed25519 -C "seu-email@exemplo.com"
   ```

3. Adicione a chave à sua conta do GitHub:
   - Copie o conteúdo do arquivo `~/.ssh/id_ed25519.pub`
   - Acesse: https://github.com/settings/keys
   - Clique em "New SSH key", cole o conteúdo e salve

4. Altere o URL do repositório remoto para usar SSH:
   ```bash
   git remote set-url origin git@github.com:anderson-ufrj/UaiSINT.git
   ```

5. Agora tente fazer o push:
   ```bash
   git push origin main
   ```

## Opção 4: GitHub CLI (gh)

1. Instale o GitHub CLI se ainda não tiver:
   ```bash
   # Para Ubuntu/Debian
   sudo apt install gh
   
   # Para macOS
   brew install gh
   ```

2. Autentique-se:
   ```bash
   gh auth login
   ```

3. Use o GitHub CLI para fazer push:
   ```bash
   gh repo sync
   ```

## Após o Push Bem-sucedido

1. Acesse as configurações do GitHub Pages em:
   https://github.com/anderson-ufrj/UaiSINT/settings/pages

2. Configure a fonte para "Deploy from a branch" e selecione a branch "main"

3. Aguarde alguns minutos para que o site seja publicado

4. Seu site estará disponível em:
   https://anderson-ufrj.github.io/UaiSINT/

## Solução de Problemas

Se você encontrar problemas durante o push, consulte a documentação oficial do GitHub:
https://docs.github.com/pt/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token

ou entre em contato com o suporte do GitHub para assistência adicional.