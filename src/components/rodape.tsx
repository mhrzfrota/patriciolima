import { PERFIL } from "@/dados";

export default function Rodape() {
  return (
    <footer id="contato" className="bg-vinho pb-10 pt-16 text-creme">
      <div className="shell">
        <div className="grid gap-10 sm:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg">
              <span className="italic">patrício</span>lima
            </p>
            <p className="mt-6 text-sm text-creme/60">{PERFIL.email || "[e-mail]"}</p>
            <p className="mt-1 text-sm text-creme/60">{PERFIL.whatsapp || "[WhatsApp]"}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-creme/50">Navegação</p>
            <ul className="mt-5 space-y-2.5 text-sm text-creme/80">
              <li><a href="#trabalhos" className="hover:text-creme">Trabalhos</a></li>
              <li><a href="#contato" className="hover:text-creme">Contato</a></li>
            </ul>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-creme/50">Social</p>
            <ul className="mt-5 space-y-2.5 text-sm text-creme/80">
              <li><a href={PERFIL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-creme">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-2 border-t border-creme/10 pt-6 text-xs text-creme/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} {PERFIL.nome}. Todos os direitos reservados.</p>
          <p>{PERFIL.cidade}</p>
        </div>
      </div>
    </footer>
  );
}
