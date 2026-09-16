# Especificação para novas páginas

## Ícone `CA` do cabeçalho

Toda página nova deve preservar o ícone `CA` centralizado dentro do quadrado dourado do cabeçalho, em desktop e mobile.

Use esta estrutura:

```html
<a class="brand" href="../index.html">
  <span class="logo">CA</span>
  <span class="brand-copy">
    <strong>Milagres Eucarísticos</strong>
    <span>Exposição internacional de Carlo Acutis</span>
  </span>
</a>
```

Use estas regras CSS:

```css
.logo {
  display: grid;
  place-items: center;
  flex: 0 0 52px;
  width: 52px;
  height: 52px;
  border: 1px solid rgba(222, 182, 90, .7);
  border-radius: 16px;
  color: var(--gold);
  font-weight: 800;
  font-size: 17px;
}

.brand-copy,
.brand-copy strong,
.brand-copy span {
  display: block;
}
```

Nunca use um seletor genérico como `.brand span { display: block; }`, pois ele substitui o `display: grid` de `.logo` e desloca as letras `CA` para o canto do ícone.

Antes de concluir uma página nova, verificar visualmente:

1. As letras `CA` estão centralizadas vertical e horizontalmente.
2. O ícone mantém suas dimensões no celular.
3. O título e subtítulo da marca permanecem ao lado do ícone.
## Vínculo obrigatório com o país

Toda nova página criada para um local, pessoa ou testemunho deve ser inserida também na lista do país correspondente na página inicial.

Para concluir esse vínculo:

1. Adicionar o item ao país correspondente no array `directory` de `script.js`.
2. Atualizar `countLabel` com a quantidade correta de itens.
3. Criar ou atualizar o mapeamento do rótulo no `index.html` para abrir a página local correta.
4. Verificar que o item aparece na home e abre a página local, sem redirecionar ao site externo.
## Ícone visual obrigatório

O ícone padrão do projeto é a imagem `eucharistic-icon.png`, localizada na raiz do projeto. Não usar mais as letras `CA` como conteúdo visual do cabeçalho.

Em cada página nova:

1. Calcular o caminho relativo correto até `eucharistic-icon.png`.
2. Usar o arquivo como fundo de `.logo`, `.brand-mark` ou `.mark`, com `background: url("caminho-relativo/eucharistic-icon.png") center / contain no-repeat`.
3. Deixar o conteúdo textual do ícone vazio e usar `aria-label="Símbolo eucarístico"`. Antes de concluir, pesquisar por `<span class="logo">CA</span>`, `<span class="brand-mark">CA</span>` e `<span class="mark">CA</span>`; nenhum deles deve permanecer.
4. Conferir em desktop e celular que não há corte, borda excedente ou espaço vazio excessivo ao redor do símbolo.