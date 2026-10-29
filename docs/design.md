# Staggy — Direção de design

## Personalidade
Institucional, calmo e preciso. Muito espaço em branco, azul-marinho como âncora da marca
e cor usada só quando carrega significado. A informação (horários, professores) é a
protagonista; a interface fica em segundo plano.

## Paleta (tokens em src/styles/globals.css)
| Papel | Token | Valor |
|---|---|---|
| Primária (marca, ação principal) | `--cor-primaria` / `-hover` / `-suave` | #14286B / #0E1D52 / #E9EEFA |
| Fundo da aplicação | `--cor-fundo` | #F5F7FB |
| Superfície (cards, modais) | `--cor-superficie` | #FFFFFF |
| Campo | `--cor-campo` + `--cor-borda-campo` | #FFFFFF + #838EA3 (3:1, WCAG 1.4.11) |
| Borda de cards e divisórias | `--cor-borda` | #D5DBE6 |
| Texto / secundário | `--cor-texto` / `--cor-texto-secundario` | #141B2D / #5B6478 |
| Sucesso | `--cor-sucesso` (+ `-suave`, `-borda`) | #157347 |
| Perigo | `--cor-perigo` (+ `-suave`, `-borda`) | #B42318 |
| Aviso | `--cor-aviso` (+ `-suave`, `-borda`) | #A15207 (AA sobre `-suave`) |
| Informação | `--cor-info` (+ `-suave`, `-borda`) | #1F6FB2 |

## Regras de cor
- Ação principal é SEMPRE azul-marinho. Uma ação primária por área.
- Verde só em feedback de sucesso (toast, etiqueta "Respondido"). Nunca em botão principal.
- Vermelho só em ação destrutiva (botão perigo) ou erro de validação.
- Status (pendente, solicitou alteração) usam `Etiqueta` com fundo suave — nunca botão sólido.
- Cor nunca é o único sinal: acompanhe com texto ou ícone.
- Níveis de superfície: fundo → superfície → campo. Evite caixa dentro de caixa.

## Tipografia — DM Sans
`--texto-tamanho-xs..3xl` = 12 · 14 · 16 · 18 · 20 · 24 · 30 px.
Pesos: 400 corpo, 500 rótulos, 600 títulos e botões, 700 só no título da página.
Título da página 30/600 · seção 20/600 · corpo 16/400 · rótulo 14/500 · auxiliar 12/400.
Sem texto em MAIÚSCULAS em botões; números tabulares em grades.

## Espaçamento, raios e sombras
- Base 4px: `--espaco-1..8` = 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64.
  Dentro de componentes 8–16; entre blocos 24–32; margem da página 32–48.
- Raios: `--raio-pequeno` 6 (etiquetas), `--raio-medio` 10 (botões, campos),
  `--raio-grande` 16 (cards, modais), `--raio-extra` 24 (menu lateral), `--raio-total` (pílulas, avatares).
- Sombras: `--sombra-suave` (cards), `--sombra-elevada` (menus, toasts), `--sombra-modal`.

## Botões
- Variantes: primário (sólido marinho), secundário (borda), fantasma (só texto), perigo.
- Tamanhos: p 32px, m 40px, g 48px. Texto em caixa normal, peso 600.
- Estados: hover escurece, foco com `--anel-foco`, desabilitado com 50% de opacidade,
  carregando mostra spinner e bloqueia clique sem mudar a largura.
- Ação destrutiva sempre pede confirmação em `Modal`.

## Formulários
- Rótulo sempre visível acima do campo (nunca só placeholder).
- Campo branco com borda de 1px (`--cor-borda-campo`); foco troca a borda para primária + anel.
- Erro: borda vermelha + mensagem abaixo com ícone. Dica em texto secundário.
- Agrupe campos relacionados em grade de 2–3 colunas; ação principal à direita, no fim.

## Tabelas e grade de horários
- Cabeçalho discreto: texto secundário 12–14/500, sem bloco sólido.
- Linhas com borda inferior sutil, hover com `--cor-primaria-suave`.
- Célula de aula: matéria em destaque, turma em texto secundário; não repetir o óbvio.
- Intervalo como faixa horizontal rotulada, não texto vertical. Dias nas colunas, aulas nas linhas.
- Cor por disciplina: `--cor-disciplina-1..8` (fundo suave) + `-destaque` (borda esquerda);
  a mesma matéria tem sempre a mesma cor. O texto fica em `--cor-texto` para manter AA.

## Estados vazios e carregamento
- `EstadoVazio`: ícone, título curto, uma frase explicando e uma ação principal.
- Carregamento com `Esqueleto` no formato do conteúdo final; nunca tela em branco.

## Feedback (toasts)
- `Aviso` no canto inferior direito, empilhados, somem em 5s (erro fica até fechar).
- Ícone + título + descrição opcional, cor do estado na borda lateral.
- Use para confirmar ações ("Disciplina criada"). Erros de campo ficam no próprio campo.

## Acessibilidade
- Contraste AA em todo texto; foco sempre visível; tudo operável por teclado.
- `--anel-foco` / `--anel-foco-perigo` têm 3:1 sobre branco e sobre o fundo.
- Botões só com ícone têm `aria-label`. Respeitar `prefers-reduced-motion`.
- Layout funcional de 1280px a 768px. O menu recolhe em 1024px (media query); os componentes
  usam container queries na área de conteúdo (`@container conteudo`) com duas larguras de
  referência: 880px (largo) e 760px (estreito).

## Componentes de padrão (reutilize antes de criar)
- `CabecalhoPagina` (h1, com `voltar` e `meta` opcionais) · `CabecalhoSecao` (h2 + descrição + ações).
- `EstadoVazio contorno` para vazio solto na página · `ErroCarregamento` para falha ao carregar.
- `BotaoIcone` para botões só com ícone (exige `rotulo`) · `Chip`/`GrupoChips` para filtros alternáveis.
- Cor de disciplina: `data-cor-disciplina="1..8"` expõe `--disciplina-fundo` e `--disciplina-destaque`.
