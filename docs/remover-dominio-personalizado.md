# Como remover o domínio personalizado do seu site GitHub Pages

Se o seu site GitHub Pages (anderson-ufrj.github.io/UaiSINT/) está redirecionando para um domínio personalizado (como uaisint.mg.br) e você deseja voltar a usar apenas a URL do GitHub Pages, siga estas instruções:

## Remover o domínio personalizado

1. Acesse seu repositório no GitHub (https://github.com/anderson-ufrj/UaiSINT)
2. Clique na aba **Settings** (Configurações)
3. No menu lateral esquerdo, selecione **Pages**
4. Na seção **Custom domain**, você verá o domínio atual configurado (uaisint.mg.br)
5. Clique no botão **Remove** (Remover) ao lado do domínio personalizado
6. Confirme a remoção quando solicitado

Após remover o domínio personalizado, o GitHub Pages retornará automaticamente para a URL padrão (anderson-ufrj.github.io/UaiSINT/).

## Notas importantes

- A alteração pode levar alguns minutos para propagar
- Limpe o cache do seu navegador (Ctrl+F5 ou Cmd+Shift+R) para ver as mudanças
- Se você estiver usando um domínio personalizado em outro repositório, isso não afetará esse outro site
- Se o problema persistir, verifique se existe um arquivo CNAME no repositório remoto (no GitHub) que pode não estar presente no seu repositório local

## Problemas comuns

1. **O botão Remove não está visível**: Isso pode ocorrer se você não tem permissões de administrador no repositório. Certifique-se de estar logado com a conta que tem permissões de administrador.

2. **O redirecionamento persiste após a remoção**: Tente forçar um novo deploy do site:
   - Vá para a aba **Actions** no seu repositório
   - Selecione o workflow "Manual Deploy to GitHub Pages"
   - Clique em "Run workflow"
   - Selecione a branch principal (main)
   - Clique em "Run workflow"

3. **Erro ao tentar remover o domínio**: Se você receber um erro relacionado à obtenção de um domínio personalizado, pode ser necessário remover esse domínio personalizado de outro repositório primeiro.

Se você seguir essas etapas, seu site deverá voltar a usar a URL padrão do GitHub Pages.