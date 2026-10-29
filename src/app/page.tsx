import { redirect } from "next/navigation";

// Sem sessão real: a entrada da aplicação é sempre o login.
export default function PaginaInicial() {
  redirect("/login");
}
