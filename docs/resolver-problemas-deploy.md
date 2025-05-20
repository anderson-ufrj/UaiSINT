# Resolvendo problemas de deploy no GitHub Pages

Se você estiver enfrentando problemas com a atualização do site no GitHub Pages, aqui estão algumas soluções que podem ajudar:

## Problemas comuns e soluções

### 1. Atraso na publicação

O GitHub Pages normalmente leva alguns minutos para processar e publicar as alterações após um push. Aguarde pelo menos 10 minutos após fazer um push para verificar se as alterações aparecem.

### 2. Cache do navegador

Seu navegador pode estar mostrando uma versão em cache do site. Tente:

- Fazer um "hard refresh" pressionando `Ctrl+F5` (Windows/Linux) ou `Cmd+Shift+R` (Mac)
- Abrir o site em uma janela anônima/privada
- Limpar o cache do navegador nas configurações

### 3. Verificar as configurações do GitHub Pages

No repositório GitHub:
1. Vá para `Settings > Pages`
2. Verifique se a fonte está configurada corretamente:
   - Branch: `main`
   - Folder: `/ (root)`

### 4. Forçar uma nova publicação

Se as alterações ainda não aparecerem, você pode:

1. Fazer uma pequena alteração no site e realizar um novo push
2. Usar o workflow de deploy manual que foi adicionado ao repositório:
   - Acesse seu repositório no GitHub
   - Vá para a aba "Actions"
   - Selecione "Manual Deploy to GitHub Pages" na barra lateral
   - Clique em "Run workflow"
   - Selecione a branch `main`
   - Clique no botão verde "Run workflow"

### 5. Verificar status do deploy

Verifique o status do deploy:
1. Acesse seu repositório no GitHub
2. Clique na aba "Actions"
3. Veja os logs de execução dos workflows para identificar possíveis erros

### 6. Problemas com domínio personalizado

Se você estiver usando um domínio personalizado:
1. Verifique se o arquivo CNAME existe na raiz do repositório
2. Confirme que as configurações DNS estão corretas no provedor do domínio

## Recursos adicionais

- [Documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)
- [Solução de problemas no GitHub Pages](https://docs.github.com/pt/pages/getting-started-with-github-pages/troubleshooting-github-pages-sites)