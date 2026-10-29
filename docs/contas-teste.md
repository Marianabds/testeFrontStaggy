# Contas de teste

Contas fictícias para entrar no Staggy durante o desenvolvimento. Não há autenticação real:
o login confere e-mail e senha contra os mocks em `src/mocks/usuarios.ts` (`src/services/autenticacao.ts`).

**Senha de todas as contas:** `staggy123`

| Cenário | E-mail | O que acontece |
| --- | --- | --- |
| Coordenação | marina.albuquerque@fatec.sp.gov.br | Entra na área do administrador (`/admin/horarios`) |
| Professor | joao.lima@fatec.sp.gov.br | Entra na área do professor (`/professor/horario`) |
| Conta desativada | eduardo.cunha@fatec.sp.gov.br | Mostra o aviso de conta desativada |
| Convite pendente | patricia.teixeira@fatec.sp.gov.br | Mostra o aviso de convite não aceito |

Qualquer outro professor com conta ativa em `src/mocks/usuarios.ts` também entra com a mesma senha
(ex.: ana.souza@fatec.sp.gov.br, carla.ribeiro@fatec.sp.gov.br).
