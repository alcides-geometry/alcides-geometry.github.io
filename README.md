# Site acadêmico — Alcides de Carvalho Júnior

Site estático em português, com layout responsivo, navegação acessível e busca de publicações. Não requer instalação nem compilação.

## Publicar no GitHub Pages

1. Crie um repositório público chamado `alcides-site` (ou utilize o repositório desejado).
2. Envie **o conteúdo desta pasta** à raiz do repositório. O arquivo `index.html` deve ficar diretamente na raiz.
3. Abra **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Selecione a branch **main**, pasta **/(root)**, e clique em **Save**.
6. Aguarde a publicação e abra o endereço informado pelo GitHub em **Settings → Pages**.

Para `alcides-site`, o endereço normalmente será `https://SEU-USUARIO.github.io/alcides-site/`. Este é apenas um modelo de endereço, não um site já publicado.

Se usar um repositório chamado `SEU-USUARIO.github.io`, a página ficará na raiz do domínio. Os links relativos funcionam nos dois casos. O arquivo `.nojekyll` identifica o conteúdo como site estático.

Documentação oficial: https://docs.github.com/pt/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Ver localmente

Abra `index.html` no navegador ou, nesta pasta, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse `http://localhost:8000`.

## Atualizar conteúdo

- `index.html`: biografia, interesses e trajetória.
- `publicacoes.html`: artigos, preprints, livro e tese.
- `ensino.html`: disciplinas e palestras.
- `saga.html`: programação e arquivo do seminário.
- `alunos.html`: orientandos.
- `assets/style.css`: identidade visual e layout.
- `assets/site.js`: menu móvel e filtros de publicações.
- `assets/`: foto e cartazes originais.

### Acrescentar publicações

Duplique um `<article class="publication" data-kind="artigo">` dentro da seção do ano correspondente. Os valores aceitos em `data-kind` são `artigo`, `preprint`, `livro` e `tese`. A busca e os totais dos resultados se ajustam automaticamente. Atualize também o resumo de contagem no início da página.

### Atualizar o SAGA

A data da palestra está em `data-talk-date`, com o fuso `-03:00`. Atualize também a data visível, o palestrante, o resumo e o cartaz. Depois da data, o rótulo muda para “Data passada”; a palestra não é removida nem movida automaticamente. Ao adicionar outra palestra, transfira a anterior para o arquivo.

## Revisão de conteúdo

O conteúdo acadêmico foi preservado a partir do arquivo fornecido; os dados não passaram por uma nova auditoria bibliográfica. Os links provisórios de Google Scholar e perfil arXiv foram removidos. O botão de currículo aponta ao Lattes, pois não havia currículo em PDF no anexo. Os campos de palestra a preencher foram substituídos por um aviso de atualização. O semestre 2025.1 passou a ser apresentado como histórico. Os cartazes em PDF foram preservados integralmente.
