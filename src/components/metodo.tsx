import { ATOS } from "@/dados";

/** Painel vinho com as três etapas do trabalho (é sequência, então leva número). */
export default function Metodo() {
  return (
    <section className="px-2.5 pt-24 sm:px-3 sm:pt-32">
      <div className="rounded-painel bg-[linear-gradient(135deg,#4E1A1D_0%,#3A1316_100%)] px-6 py-16 text-creme sm:px-16 sm:py-24">
        <ol className="grid gap-12 md:grid-cols-3 md:gap-14">
          {ATOS.map((a, i) => (
            <li key={i}>
              <p className="text-[11px] tracking-[0.18em] text-cobre">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl font-extralight">{a.titulo}</h3>
              <p className="mt-3 text-[13px] leading-[1.8] text-creme/80">{a.texto}</p>
              <ul className="mt-6 space-y-2 text-[13px] text-creme/60">
                {a.itens.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
