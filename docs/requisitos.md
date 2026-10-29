REQUISITOS FUNCIONAIS 

RF 1 | Autenticação: 
RF 1.1 - O sistema deve permitir que administradores e professores acessem suas contas por meio de credenciais (e-mail e senha) válidas. 
RF 1.2 -  O sistema deve identificar o perfil do usuário autenticado, diferenciando administrador e professor, para direcioná-lo às funcionalidades correspondentes. 
RF 1.3 - O sistema deve permitir que o usuário encerre sua sessão. 
RF 1.4 - O sistema deve permitir que o usuário solicite a recuperação de sua senha por meio de um e-mail através de um link enviado para o endereço de e-mail utilizado durante o cadastro.
RF 1.5 - O sistema deve restringir o acesso às funcionalidades de acordo com o perfil e as permissões atribuídas ao usuário. 
RF 1.6 -  O sistema deve impedir a autenticação de contas desativadas.
RF 1.7 - O sistema deve permitir a criação de contas de professores conforme o método de cadastro e autorização definido para o sistema. 
RF 1.8 -  O sistema deve permitir que o administrador gerencie o estado das contas dos professores, incluindo sua ativação e desativação. 
RF 1.9 -  O sistema deve permitir que administradores e professores alterem suas próprias senhas mediante confirmação da senha atual. 
RF 1.10 -  O sistema deve permitir que o usuário permaneça autenticado durante a navegação, até que encerre sua sessão ou que ela expire. 
RF 1.11 -  O sistema deve encerrar automaticamente a sessão do usuário após o período de inatividade de 1 hora. 
RF 1.12 -  O sistema deve informar ao usuário quando as credenciais utilizadas para autenticação forem inválidas. 
RF 1.13 - Caso o administrador insira o e-mail de um professor já cadastrado, o sistema deverá identificar e enviar um convite para o professor, permitindo que ele seja vinculado ao devido administrador. 

RF 2 | Formulário: 
RF 2.1 - O sistema deve permitir que o professor preencha um formulário com informações necessárias para a geração automática dos horários.
RF 2.2 -  O sistema deve permitir que o professor informe sua disponibilidade para cada dia, horário e turno. 
RF 2.3 - O sistema deve disponibilizar no formulário os dias da semana, horários e turnos de aula definidos previamente. 
RF 2.4 -  O sistema deve permitir que o professor informe as matérias para as quais possui interesse em lecionar. 
RF 2.5 - O sistema deve disponibilizar no formulário apenas as matérias previamente cadastradas para o semestre correspondente. 
RF 2.6 -  O sistema deve permitir que o professor classifique o interesse em ministrar as matérias de 1 à 5. 
RF 2.7 - O sistema deve permitir que o administrador inicie e finalize o período de envio de respostas do formulário manualmente.
RF 2.8 - O sistema deve permitir que o administrador defina uma data de início e fim para a disponibilidade e o encerramento automático do formulário.
RF 2.9 - O sistema deve permitir que o administrador visualize o nome, a data de início e fim e a quantidade de respostas do formulário.
RF 2.10 - O sistema deve permitir que o administrador visualize os professores que responderam o formulário e a data.
RF 2.11 - O sistema deve permitir que o administrador filtre os professores que não responderam o formulário.
RF 2.12 - O sistema deve impedir o envio de respostas após o encerramento do período de disponibilidade do formulário. 
RF 2.13 - O sistema deve vincular as respostas do formulário ao professor e ao semestre correspondente. 
RF 2.14 -  O sistema deve permitir que o professor visualize a resposta que enviou. 
RF 2.15 -  O sistema deve permitir que o professor solicite alteração de uma resposta já enviada. 
RF 2.16 -  O sistema deve permitir que o professor visualize o status da solicitação de alteração. 
RF 2.17 - Caso o professor esteja vinculado a mais de um administrador, o formulário deverá exibir as disciplinas referentes a todos os administradores para seleção do professor.
RF 2.18 - O sistema deve impedir que o professor altere ou preencha novamente o formulário depois de finalizado e entregue. Essa condição muda apenas quando ele enviar uma solicitação de preenchimento de formulário e o administrador aceitar.
RF 2.19 - 
RF 2.20 - 
  
RF 3 | Gestão de horário: 
RF 3.1 -  O sistema deve permitir que o administrador execute o escalonador manualmente.
RF 3.2 - O sistema deve gerar uma prévia do horário após importação dos dados coletados por meio do formulário de preferência e disponibilidade dos professores de determinado curso.
RF 3.3 -  O sistema deve permitir que o administrador edite manualmente as prévias de horários gerados. 
RF 3.4 -  O sistema deve permitir que o professor envie uma solicitação de alteração  de horário, descrevendo o motivo. A solicitação de horário não possui nenhum tipo de aceite ou recusa por parte do ADM, é algo puramente descritivo.
RF 3.5 -  O sistema deve gerar automaticamente a imagem (PDF) da grade de horários, personalizada tanto para turmas quanto para professores.
RF 3.6 -  O sistema deve permitir exportar a imagem gerada.
RF 3.7 -  O sistema deve priorizar as preferências de horários informadas pelos professores, sempre que possível.
RF 3.8 - O sistema deve respeitar a indisponibilidade dos professores durante a geração da grade de horários.
RF 3.9 - O sistema deve impedir que um professor seja alocado em duas turmas no mesmo dia e horário.
RF 3.10 - O sistema deve identificar os conflitos de alocação que impossibilitem a geração completa da grade de horários e informar o administrador.
RF 3.11 - O sistema deve permitir que o administrador visualize a grade de horários gerada, organizada por turma, semestre e período.
RF 3.12 - O sistema deve permitir que o professor consulte a grade de horários correspondente às suas alocações.
RF 3.13 - O sistema deve exibir uma tela em branco com mensagem informativa quando a prévia do horário estiver indisponível. 
RF 3.14 - O sistema deve permitir que o administrador bloqueie aulas para que não sejam alteradas em uma nova geração do horário. 
RF 3.15 - O sistema deve gerar um novo horário mantendo as aulas bloqueadas pelo administrador. 
RF 3.16 - O sistema deve exibir ao professor a prévia do horário contendo apenas as aulas pelas quais ele é responsável. 
RF 3.17 - Após solicitar geração de novo horário, o sistema deve exibir uma mensagem informando quais outras turmas também foram afetadas pela alteração, permitindo que o administrador acesse facilmente as novas prévias de horário
RF 3.18 - O sistema deve permitir que o administrador defina uma prévia como definitiva, tornando-a o horário padrão e sendo disponibilizada para visualização dos professores.
RF 3.19 - O sistema deve manter um histórico de versões dos horários gerados. 

RF 4 | Identificação Automática de Pendências: 
RF 4.1 - O sistema deve avisar o administrador o motivo de algum horário ter ficado incompleto.
RF 4.2 - O sistema deve informar ao administrador as matérias sem professor interessado. 
RF 4.3 - O sistema deve informar ao administrador as turmas ou aulas que ficaram sem professor alocado. 
RF 4.4 - O sistema deve informar ao administrador as solicitações de alteração pendentes de análise.  
RF 4.5 - O sistema deve informar ao administrador os conflitos de disponibilidade (“Não posso”) que impediram uma alocação. 
RF 4.6 - O sistema deve informar ao administrador quais professores ainda não responderam o formulário antes da geração do horário. 
 
 
RF 5 | Notificações: 
RF 5.1 -  O sistema deve notificar os professores quando um novo horário for gerado.
RF 5.2 -  O sistema deve notificar o administrador ao identificar um conflito no horário após alteração na disponibilidade de determinado professor e, então, solicitar ajuste manual ou execução do escalonador. 
RF 5.3 -  O sistema deve notificar os professores que ficaram sem horário para reverem sua disponibilidade e se conseguem mudá-la.
RF 5.4 - O sistema deve notificar os professores quando o período de resposta do formulário for iniciado. 
RF 5.5 - O sistema deve notificar os professores quando o período de resposta do formulário for encerrado. 
RF 5.6 - O sistema deve notificar diariamente o professor que ainda não respondeu o formulário enquanto o período estiver aberto. 
RF 5.7 - O sistema deve notificar o administrador quando receber uma nova solicitação de alteração. 
RF 5.8 - O sistema deve notificar o professor quando sua solicitação de alteração for aprovada ou rejeitada. 
RF 5.9 - O sistema deve enviar ao professor convidado o link para criação de conta. 
 
RF 6 | Níveis de Acesso: 
RF 6.1 - O sistema deve permitir que o administrador acesse as funcionalidades de horários, formulário, professores, cadastros e solicitações. 
RF 6.2 - O sistema deve impedir que um professor visualize os dados de outro professor. 
RF 6.3 - O sistema deve permitir que o professor acesse apenas seu horário, seu formulário e suas solicitações de alteração. 
RF 6.4 - O sistema deve garantir que um administrador não tenha acesso ou seja capaz de editar nenhum dado alocado a outro administrador.

RF 7 | Criação dos dados do formulário:
RF 7.1 - O sistema deve permitir que o administrador consulte, adicione ou exclua um dia da semana letiva, podendo mudar de acordo com o turno.
RF 7.2 - O sistema deve permitir que o administrador altere o tamanho de um bloco de aula válido, adicionando ou removendo a quantidade de aulas a serem lecionadas naquele período.
RF 7.3 - O sistema deve permitir que o administrador adicione ou exclua um bloco de aulas a serem realizadas, com um intervalo entre ela e a anterior.
RF 7.4 -  O sistema deve permitir que o administrador consulte, adicione ou exclua semestres. 
RF 7.5 -  O sistema deve permitir que o administrador consulte, adicione ou retire turmas em um semestre. 
RF 7.6 - O sistema deve permitir que o administrador cadastre matérias, informando o nome, a quantidade de aulas por semana, o semestre ao qual pertence, quantidade de professores e turno.
RF 7.7 -  O sistema deve permitir que o administrador consulte, edite e exclua matérias cadastradas, respeitando os vínculos existentes com turmas e respostas dos formulários. 
RF 7.8 -  O sistema deve permitir que o administrador filtre as matérias por semestre. 

RF8 | Gestão de professores:
RF 8.1 - O sistema deve permitir que o administrador convide um professor informando o e-mail dele. 
RF 8.2 - O sistema deve permitir que o administrador visualize a listagem de professores. 
RF 8.3 - O sistema deve permitir que o administrador busque professores ao preencher a barra de pesquisa. 
RF 8.4 - O sistema deve permitir que o administrador filtre os professores que não responderam o formulário. 
RF 8.5 - O sistema deve exibir uma mensagem quando a busca ou o filtro não retornar resultados. 
RF 8.6 - O sistema deve permitir que o administrador visualize os dados cadastrais de um professor (nome, e-mail, etc).
RF 8.7 - O sistema deve permitir que o administrador visualize a resposta do formulário de um professor. 
RF 8.8 - O sistema deve permitir que o administrador visualize os horários de aula de um professor. 
RF 8.9 - O sistema deve permitir que o administrador visualize a listagem de solicitações de alteração de um professor. 
RF 8.10 - O sistema deve permitir que o administrador desative a conta de um professor. 
RF 8.11 - O sistema deve permitir que o administrador oculte as prévias dos horários, impedindo a visualização dos professores.
RF 8.12 - O sistema deve permitir que o administrador permita a visualização de prévias de horário.

RF9 | Solicitações de Alteração:
RF 9.1 - O sistema deve permitir que o professor consulte o histórico de suas solicitações de alteração de horário. 
RF 9.2 - O sistema deve permitir que o administrador visualize a listagem de solicitações de alteração. 
RF 9.3 - O sistema deve permitir que o professor preencha e envie um formulário de solicitação de alteração de horário. 
RF 9.4 - O sistema deve permitir que o professor visualize o estado de cada solicitação (pendente, aprovada ou rejeitada). 
RF 9.5 - O sistema deve permitir que o administrador visualize os dados de uma solicitação. 
RF 9.6 - O sistema deve permitir que o administrador aprove ou rejeite uma solicitação. 

REQUISITOS NÃO FUNCIONAIS 
 
RNF 1 - O sistema deve armazenar senhas utilizando algoritmos de hash seguros e apropriados para armazenamento de credenciais.
RNF 2 - O sistema deve manter registros de operações críticas, como alterações de permissões, aprovação de solicitações e definição de horários definitivos.
RNF 3 - O sistema deve responder às operações comuns de consulta e cadastro dentro de um tempo máximo de 3 segundos.  
RNF 4 - O sistema deve apresentar disponibilidade mínima de 99% ao mês, desconsiderando períodos de manutenção previamente programados. 
RNF 5 - O sistema deve concluir a geração automática de horários em até X segundos para um cenário com X turmas, X professores, X disciplinas. 
RNF 6 - O sistema deve encerrar automaticamente a sessão do usuário (administrador ou professor) após 1 hora de inatividade.
RNF 7 - O sistema deve garantir que o link de recuperação de senha seja válido por 15 minutos. Esse link é de uso único e a geração de um novo invalida o anterior.
RNF 8 - O sistema deve garantir que o link de criação de conta seja válido por 72 horas. Esse link é de uso único e a geração de um novo invalida o anterior.
RNF 9 - O sistema deve usar o fuso horário de Brasília em todas as datas e horas.
RNF 10 - O sistema deve exigir senhas com no mínimo: 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 caractér especial e 1 número.
RNF 11 - O sistema deve utilizar HTTPS para proteger a comunicação entre cliente e servidor. 
