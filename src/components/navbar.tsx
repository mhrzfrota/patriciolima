import { PERFIL, linkContato } from "@/dados";

const MENU = [
  { href: "#inicio", rotulo: "Home" },
  { href: "#trabalhos", rotulo: "Trabalhos" },
  { href: "#contato", rotulo: "Contato" },
];

/** Por cima do hero, como na referência: nome à esquerda, links no centro, ação à direita. */
export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 px-4 pt-4 sm:px-6">
      <div className="flex h-14 items-center justify-between px-4 text-creme sm:px-8">
        <a href="#inicio" className="font-display text-lg font-normal tracking-[-0.01em]">
          <span className="italic">patrício</span>lima
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Principal">
          {MENU.map((l) => (
            <a key={l.href} href={l.href} className="rotulo opacity-70 transition-opacity hover:opacity-100">
              {l.rotulo}
            </a>
          ))}
        </nav>
        <a href={linkContato()} target="_blank" rel="noopener noreferrer" className="rotulo font-medium" aria-label={`Iniciar projeto com ${PERFIL.nome}`}>
          Iniciar projeto
        </a>
      </div>
    </header>
  );
}
