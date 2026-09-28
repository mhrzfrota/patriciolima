import { linkContato } from "@/dados";

/** Chamada final com a letra gigante de marca-d'água, como o "ℓ" da referência. */
export default function Cta() {
  return (
    <section className="relative isolate overflow-hidden py-28 sm:py-40">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 top-1/2 -z-10 -translate-y-1/2 select-none font-display text-[26rem] font-extralight italic leading-none text-creme-2 sm:text-[38rem]"
      >
        p
      </span>
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
