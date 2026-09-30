import { LETRAS, LINHA, P, PONTO } from "./logo-paths";

/** Vermelho do ponto, cor fixa da marca. */
const VERMELHO = "#DE2C32";

type Props = {
  /** "completa": patríciolima com a linha; "monograma": só o p com o ponto. */
  variante?: "completa" | "monograma";
  /** false = ponto na mesma cor do texto (uso em peças de uma cor só, como marca-d'água). */
  ponto?: boolean;
  className?: string;
  titulo?: string;
};

/** Marca vetorial sem fundo. A cor vem do `currentColor` (ex.: text-creme, text-vinho). */
export default function Logo({ variante = "completa", ponto = true, className, titulo = "Patrício Lima" }: Props) {
  const corPonto = ponto ? VERMELHO : "currentColor";
  const decorativo = titulo === "";

  if (variante === "monograma") {
    return (
      <svg viewBox="8 105 136 106" className={className} fill="currentColor" role={decorativo ? undefined : "img"} aria-hidden={decorativo || undefined} aria-label={decorativo ? undefined : titulo}>
        <path d={P} />
        <path d={PONTO} fill={corPonto} transform="translate(-742 -39)" />
      </svg>
    );
  }

  return (
    <svg viewBox="8 79 892 141" className={className} fill="currentColor" role={decorativo ? undefined : "img"} aria-hidden={decorativo || undefined} aria-label={decorativo ? undefined : titulo}>
      <path d={LETRAS} fillRule="evenodd" />
      <path d={LINHA} />
      <path d={PONTO} fill={corPonto} />
    </svg>
  );
}
