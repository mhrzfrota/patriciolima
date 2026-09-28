import { Play } from "lucide-react";

/**
 * Espaço de vídeo ou foto. Sem `src`, um fundo escuro com o aviso do que vai
 * ali. Quando o material chegar: ajustar o card à proporção dele, sem cortar
 * nem esticar.
 */
export default function Midia({ descricao, src, video, className = "", semAviso }: { descricao: string; src?: string; video?: boolean; className?: string; /** Quando há texto por cima, o aviso sai do caminho */ semAviso?: boolean }) {
  if (src && video) return <video src={src} autoPlay muted loop playsInline className={`h-full w-full object-cover ${className}`} />;
  if (src) return <img src={src} alt={descricao} loading="lazy" className={`h-full w-full object-cover ${className}`} />;
  return (
    <div
      role="img"
      aria-label={`Espaço para ${video ? "vídeo" : "foto"}: ${descricao}`}
      className={`flex h-full w-full items-center justify-center bg-[radial-gradient(120%_90%_at_30%_20%,#4a4540_0%,#2a2724_55%,#1A1B1D_100%)] ${className}`}
    >
      <div className={`max-w-[14rem] flex-col items-center gap-2 px-4 text-center text-creme/50 ${semAviso ? "hidden" : "flex"}`}>
        <Play aria-hidden className="h-5 w-5" strokeWidth={1.25} />
        <span className="rotulo text-[10px]">{video ? "Vídeo" : "Foto"}</span>
        <span className="text-xs">{descricao}</span>
      </div>
    </div>
  );
}
