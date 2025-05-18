# Como Publicar no GitHub Pages

## Passos para Deploy

1. **Criar repositório no GitHub**
   - Acesse https://github.com/new
   - Nome do repositório: `uaisint-presentation` (ou outro nome de sua preferência)
   - Deixe como público
   - NÃO inicialize com README

2. **Conectar repositório local ao remoto**
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/uaisint-presentation.git
   ```

3. **Enviar código para o GitHub**
   ```bash
   git push -u origin main
   ```

4. **Configurar GitHub Pages**
   - Vá em Settings do repositório
   - Clique em "Pages" no menu lateral
   - Em "Source", selecione "Deploy from a branch"
   - Em "Branch", selecione "main" e "/ (root)"
   - Clique em "Save"

5. **Aguardar deploy**
   - O GitHub levará alguns minutos para publicar
   - A URL será: `https://SEU_USUARIO.github.io/uaisint-presentation/`

## Estrutura de Arquivos

```
/
├── index.html          # Página inicial (seletor de modo)
├── presentation.html   # Apresentação em slides
├── website.html        # Versão site
├── README.md           # Documentação
├── assets/             # Recursos
│   ├── imagem1.png
│   ├── imagem2.jpg
│   └── uaisint_logo.png
└── arquivo/            # Versões anteriores
```

## Dicas

- O arquivo `index.html` é sempre a página principal
- Certifique-se de que todos os caminhos de imagens estão corretos
- Teste localmente antes de fazer push