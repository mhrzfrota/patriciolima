import { useState } from "react";
import { TRABALHOS } from "@/dados";
import Midia from "./midia";

/**
 * Sanfona de vídeos da referência: um aberto e largo, os outros em faixas
 * estreitas. Passar o mouse (ou focar) abre a faixa. No celular vira uma
 * lista de cards.
 */
export default function Trabalhos() {
  const [aberto, setAberto] = useState(0);

  return (
    <section id="trabalhos" className="px-2.5 sm:px-3">
      <h2 className="sr-only">Trabalhos</h2>
      <ul className="flex flex-col gap-2.5 md:h-[560px] md:flex-row">
        {TRABALHOS.map((t, i) => {
          const ativo = i === aberto;
          return (
            <li
              key={i}
              onMouseEnter={() => setAberto(i)}
              onFocus={() => setAberto(i)}
              className={`group relative isolate h-[420px] overflow-hidden rounded-painel transition-[flex-grow] duration-700 ease-out md:h-auto ${
                ativo ? "md:flex-[4]" : "md:flex-1"
              }`}
            >
              <div className="absolute inset-0 -z-10">
                <Midia video semAviso descricao={`Vídeo: ${t.titulo}`} />
              </div>
              <div
                aria-hidden
                className={`absolute inset-0 -z-10 bg-tinta transition-opacity duration-500 ${ativo ? "opacity-0" : "opacity-0 md:opacity-40"}`}
              />
              <a
                href="#"
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-creme transition-opacity duration-500 ${
                  ativo ? "opacity-100" : "opacity-100 md:opacity-0"
                }`}
              >
                <span className="font-display text-2xl font-light sm:text-3xl">{t.titulo}</span>
                <span className="rotulo mt-3 text-creme/70">Assistir vídeo completo</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
