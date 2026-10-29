import type { Metadata } from "next";
import Link from "next/link";
import { CabecalhoPagina } from "@/components/layout/CabecalhoPagina";
import { EstruturaPagina } from "@/components/layout/EstruturaPagina";
import { Botao } from "@/components/ui/Botao";
import { Cartao } from "@/components/ui/Cartao";
import { IconeMais } from "@/components/ui/Icones";
import { hrefConfiguracoes, itensMenuAdministrador, itensMenuProfessor } from "@/lib/navegacao";
import { obterUsuarioLogado } from "@/services/usuarios";

export const metadata: Metadata = { title: "Estrutura · Staggy" };

type Props = { searchParams: { perfil?: string } };

/** Prévia da EstruturaPagina antes de existirem as telas. ?perfil=professor troca o menu. */
export default async function PaginaEstrutura({ searchParams }: Props) {
  const perfil = searchParams.perfil === "professor" ? "professor" : "administrador";
  const usuario = await obterUsuarioLogado(perfil);
  const itens = perfil === "administrador" ? itensMenuAdministrador : itensMenuProfessor;
  const ativo = perfil === "administrador" ? "/admin/professores" : "/professor/horario";

  return (
    <EstruturaPagina
      itensMenu={itens.map((item) => (item.href === "/admin/professores" ? { ...item, contador: 2 } : item))}
      usuario={usuario}
      hrefConfiguracoes={hrefConfiguracoes[perfil]}
      caminhoAtivo={ativo}
    >
      <CabecalhoPagina
        sobretitulo="Prévia da estrutura"
        titulo={perfil === "administrador" ? "Professores" : "Olá, professor João"}
        subtitulo={
          perfil === "administrador"
            ? "Convide professores, acompanhe as respostas do formulário e trate as solicitações."
            : "Confira seu horário e mantenha sua disponibilidade atualizada."
        }
        acoes={
          <>
            <Link href={`/dev/estrutura?perfil=${perfil === "administrador" ? "professor" : "administrador"}`}>
              Ver como {perfil === "administrador" ? "professor" : "administrador"}
            </Link>
            {perfil === "administrador" && <Botao icone={<IconeMais />}>Convidar professor</Botao>}
          </>
        }
      />
      <Cartao titulo="Área de conteúdo" descricao="As telas serão montadas aqui, dentro da EstruturaPagina." />
    </EstruturaPagina>
  );
}
