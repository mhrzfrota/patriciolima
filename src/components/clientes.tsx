import { CLIENTES } from "@/dados";

/** Faixa vinho com as marcas. FALTA: logos em SVG claro de quem ele já atendeu. */
export default function Clientes() {
  return (
    <section className="bg-vinho py-16 text-creme sm:py-20">
      <div className="shell">
        <h2 className="text-center font-display text-xl font-light sm:text-[1.3rem]">Marcas que confiam no trabalho</h2>
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
          {CLIENTES.map((c, i) => (
            <li key={i} className="text-center font-display text-lg font-normal text-creme/70">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
