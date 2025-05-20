# Solução de Problemas 🔧

Este guia ajudará você a resolver problemas comuns encontrados no projeto UaiSINT.

## Alterações não aparecem no navegador

### Problema: As alterações feitas nos arquivos não aparecem ao visualizar no navegador.

**Possíveis causas e soluções:**

1. **Cache do navegador**
   - Solução: Limpe o cache do navegador ou use o modo de navegação privada/anônima.
   - Atalho: Pressione `Ctrl+Shift+R` (Windows/Linux) ou `Cmd+Shift+R` (Mac) para recarregar ignorando o cache.

2. **Problemas com paths relativos**
   - Solução: Verifique se todos os caminhos de arquivo estão corretos. Use caminhos relativos consistentes:
     ```html
     <!-- Correto -->
     <script src="./js/translations.js"></script>
     
     <!-- Evite -->
     <script src="js/translations.js"></script>
     ```

3. **Conflito de JS ou erros no console**
   - Solução: Abra as Ferramentas de Desenvolvedor (F12) e verifique se há erros no console.

## Problemas de Tradução

### Problema: As traduções não funcionam corretamente.

**Possíveis causas e soluções:**

1. **Arquivo translations.js não está sendo carregado**
   - Solução: Verifique se o script está sendo carregado no HTML antes de qualquer código que o utiliza.
   - Confirme que o caminho do arquivo está correto.

2. **Chaves de tradução inconsistentes**
   - Solução: Verifique se as chaves usadas nos atributos `data-i18n` correspondem exatamente às chaves no arquivo de traduções.
   - Procure por erros de digitação ou inconsistências entre camelCase e kebab-case.

3. **Ordem de inicialização incorreta**
   - Solução: Certifique-se de que as traduções são inicializadas antes de serem usadas.

## Problemas de Deploy no GitHub Pages

### Problema: O site não aparece corretamente no GitHub Pages.

**Possíveis causas e soluções:**

1. **Branch incorreta configurada**
   - Solução: Verifique nas configurações do repositório se a branch correta está definida como fonte do GitHub Pages.

2. **Caminhos de recursos incorretos**
   - Solução: No GitHub Pages, os caminhos são relativos à raiz do repositório. Certifique-se de que todos os links para CSS, JavaScript e imagens usam caminhos relativos corretos.

3. **Arquivos não adicionados ao commit**
   - Solução: Verifique se todos os arquivos necessários foram adicionados ao repositório.
   - Use `git status` para ver quais arquivos foram modificados mas não commitados.

## Problemas com arquivos não monitorados

### Problema: Arquivos novos não estão sendo reconhecidos pelo Git.

**Possíveis causas e soluções:**

1. **Arquivos ignorados pelo .gitignore**
   - Solução: Verifique se o arquivo não está sendo ignorado por padrões no `.gitignore`.

2. **Arquivos não adicionados**
   - Solução: Use `git add <arquivo>` para adicionar arquivos específicos ou `git add .` para adicionar todos os arquivos.

## Scripts não executáveis

### Problema: Os scripts de validação ou deploy não executam.

**Possíveis causas e soluções:**

1. **Permissões insuficientes**
   - Solução: Torne os scripts executáveis com:
     ```bash
     chmod +x docs/validate.sh docs/deploy-improved.sh
     ```

2. **Erros de sintaxe**
   - Solução: Verifique se os scripts não contêm erros de sintaxe.
   - Execute `bash -n docs/script.sh` para verificar erros de sintaxe sem executar o script.

## Validação

Para validar que sua instalação está funcionando corretamente, execute:

```bash
bash docs/validate.sh
```

Este script verificará a presença de todos os arquivos essenciais e a configuração do Git.

## Ainda com problemas?

Se você ainda estiver enfrentando problemas, tente:

1. Criar um novo clone do repositório
2. Verificar se há erros no console do navegador
3. Comparar sua versão com a versão no GitHub

Ou entre em contato com anderson-ufrj através do GitHub para assistência adicional.