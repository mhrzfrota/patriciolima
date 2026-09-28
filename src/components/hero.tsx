import { linkContato } from "@/dados";
import Midia from "./midia";

/**
 * Hero dividido da referência: vídeo vertical à esquerda (o formato do
 * Instagram), painel largo à direita com a frase de posicionamento.
 */
export default function Hero() {
  return (
    <section id="inicio" className="grid gap-2.5 p-2.5 md:h-[100svh] md:min-h-[640px] md:grid-cols-[0.68fr_1fr] sm:gap-3 sm:p-3">
      <div className="relative aspect-[9/14] overflow-hidden rounded-painel md:aspect-auto">
        <Midia video descricao="Reel vertical em destaque (o melhor do Instagram)" />
      </div>

      <div className="relative isolate flex min-h-[420px] items-end overflow-hidden rounded-painel">
        <div className="absolute inset-0 -z-10">
          <Midia video semAviso descricao="Take horizontal em movimento, ao fundo" />
        </div>
        <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(26,27,29,0)_30%,rgba(26,27,29,0.75)_100%)]" />
        <div className="p-6 text-creme sm:p-12">
          <h1 className="subir font-display text-[1.7rem] font-normal uppercase leading-tight sm:text-4xl">[Frase de posicionamento.]</h1>
          <p className="subir mt-3 max-w-xl font-display text-lg font-light italic leading-relaxed text-creme/85 sm:text-2xl" style={{ animationDelay: "0.15s" }}>
            [O que Patrício faz, para quem, e o que o trabalho dele tem de único.]
          </p>
          <a
            href={linkContato()}
            target="_blank"
            rel="noopener noreferrer"
            className="pilula subir mt-8 border border-creme/60 text-creme hover:bg-creme hover:text-tinta"
            style={{ animationDelay: "0.3s" }}
          >
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  );
}
