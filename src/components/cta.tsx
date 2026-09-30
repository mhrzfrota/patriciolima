import { linkContato } from "@/dados";
import Logo from "./logo";

/** Chamada final com o monograma gigante de marca-d'água, como o "ℓ" da referência. */
export default function Cta() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <Logo
        variante="monograma"
        ponto={false}
        titulo=""
        className="pointer-events-none absolute -right-16 top-1/2 -z-10 h-[18rem] w-auto -translate-y-1/2 select-none text-creme-2 sm:h-[26rem]"
      />
      <div className="shell text-center">
        <h2 className="font-display text-5xl font-extralight leading-[1.05] text-vinho sm:text-[4.5rem]">
          Tem um <em className="font-light text-cobre">projeto</em>
          <br />
          em mente?
        </h2>
        <a href={linkContato()} target="_blank" rel="noopener noreferrer" className="pilula mt-10 bg-vinho text-creme hover:bg-cobre">
          Vamos criar
        </a>
      </div>
    </section>
  );
}
