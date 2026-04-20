# Despesas

Uma aplicação web simples para controle de orçamento e monitoramento de despesas, implementada com HTML, CSS e JavaScript puro.

## Funcionalidades

- Definir um orçamento mensal
- Adicionar despesas por categoria
- Exibir estatísticas em tempo real:
  - Despesas totais
  - Despesa média
  - Saldo restante
  - Maior categoria de gasto
  - Valores por categoria (Mercado, Comer fora, Transporte, Casa, Assinaturas)
- Remover despesas individuais
- Limpar todas as despesas e recomeçar
- Persistência de dados usando `localStorage`

## Estrutura do projeto

- `index.html` - estrutura da interface da aplicação
- `pages/index.css` - estilos principais da página
- `scripts/index.js` - lógica de interação com a UI, eventos e manipulação de elementos
- `scripts/calculations.js` - funções de cálculo de despesas, saldo e categorias
- `scripts/handle-html.js` - renderização da lista de despesas, modal e armazenamento local
- `blocks/` - estilos segmentados por componentes e layout
- `vendor/` - reset de estilos e fontes

## Como usar

1. Abra `index.html` no navegador.
2. Defina o orçamento no campo `Orçamento` e clique em `Definir`.
3. Clique em `Nova Despesa` para abrir o modal.
4. Selecione a categoria, informe o valor e clique em `Adicionar`.
5. Veja as estatísticas atualizarem automaticamente.
6. Use `Limpar tudo` para resetar o orçamento e as despesas.

## Execução

Basta abrir `index.html` em um navegador compatível. Não é necessário servidor ou instalação adicional.

## Projetado para

- Estudo de manipulação de DOM com JavaScript
- Criação de dashboards simples de despesas
- Prática de persistência de dados no navegador
