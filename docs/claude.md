# Staggy — Front-end

Sistema de geração de grade de horários escolares. Perfis: administrador (coordenador) e professor.
Requisitos completos em docs/requisitos.md — consulte SÓ quando a tarefa exigir.

## Escopo
- APENAS front-end. Sem back-end, sem banco, sem autenticação real.
- Dados vêm de mocks tipados em src/mocks, acessados por funções async em src/services
  (para trocar por API depois sem mexer nas telas).

## Stack
- Next.js 14 (App Router), React 18, TypeScript strict.
- Estilização com CSS Modules (Componente.module.css ao lado de cada componente).
- Estilos globais e variáveis CSS (design tokens) em src/styles/globals.css, no `:root`:
  `--cor-*` (primaria, perigo, sucesso, aviso, superficie, fundo, campo, borda, texto…),
  `--texto-*` / `--peso-*` (tipografia), `--espaco-1..8`, `--raio-*`, `--sombra-*`, `--transicao-padrao`.
  Fonte: DM Sans via next/font (`--fonte-principal`, usada por `--fonte-base`).
- NÃO usar Tailwind nem bibliotecas de UI. Não instalar bibliotecas novas sem perguntar.

## Estrutura
src/
  app/(auth)/                 login, recuperar-senha, redefinir-senha
  app/(admin)/admin/          horarios, formulario, professores, dados
  app/(professor)/professor/  horario, formulario
  components/ui/              Botao, BotaoIcone, CampoTexto, Seletor, Cartao, Etiqueta, Chip, Abas, Modal, EstadoVazio, ErroCarregamento, BarraPesquisa...
  components/layout/          MenuLateral, EstruturaPagina, CabecalhoPagina, CabecalhoSecao, LinkVoltar
  components/horario/         GradeHorario e relacionados
  components/compartilhados/  FiltroSemestre, GradeDisponibilidade (usados por admin e professor)
  components/solicitacoes/    ListaSolicitacoes, EtiquetaStatusSolicitacao
  components/<dominio>/       componentes específicos de uma área
  styles/globals.css          tokens e reset
  mocks/                      dados fictícios por domínio (academico, usuarios, formularios, grades, solicitacoes)
  services/                   funções async que leem os mocks com atraso simulado (trocar por API depois)
  types/                      tipos do domínio, importados de "@/types"
  lib/                        utilitários (rótulos, formatação, navegação do menu)
public/icons/                 ícones do projeto (NUNCA apagar)

## Regras de componentização
- Nomes de componentes, props e arquivos em português, em PascalCase (ex: GradeHorario.tsx + GradeHorario.module.css).
- ANTES de criar um componente, verifique se já existe em src/components. Reutilize ou estenda via props.
- Componentes pequenos e com props tipadas. Nada de componente com mais de ~150 linhas.
- Estados diferentes da mesma tela (vazio, ativo, fechado) = a mesma página com props/estado, não páginas duplicadas.
- Server Components por padrão; "use client" só onde houver interação.
- Cores, fontes, espaçamentos e raios vêm das variáveis CSS em globals.css (ex: var(--cor-primaria)).
  Nada de cor hex solta nos .module.css.

## Design
- Os protótipos do Figma definem CONTEÚDO, FLUXO e FUNCIONALIDADES, não o visual final.
- O visual deve ser melhorado no nível de um designer/dev sênior, seguindo docs/design.md.
- Mantenha a identidade da marca Staggy (azul-marinho como cor principal).
- Toda tela deve prever: hover, foco visível, carregamento, vazio, erro e sucesso.
- Acessibilidade: contraste AA, navegação por teclado, aria-labels em botões só com ícone.
- Responsivo: funcionar bem de 1280px até 768px.

## Figma
- Prefira get_screenshot e get_metadata para entender a tela. Use get_design_context
  só quando precisar de um detalhe específico (o código do Figma não será copiado).
- Use os ícones de public/icons sempre que existir equivalente.

## Ao terminar cada tarefa
- Rode `npm run lint` e `npx tsc --noEmit` e corrija erros.
- Responda com um resumo curto (arquivos criados/alterados), sem repetir o código.