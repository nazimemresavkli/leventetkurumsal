import LogoMark from "@/components/LogoMark";

export default function PhotoOverlay({ logoHeight = 34 }: { logoHeight?: number }) {
  return (
    <div className="absolute inset-0 grid place-items-center px-6 pointer-events-none bg-ink/0 group-hover:bg-ink/45 transition-colors duration-500">
      <div className="opacity-0 scale-90 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 ease-out drop-shadow-[0_4px_12px_rgba(0,0,0,.5)]">
        <LogoMark height={logoHeight} color="#FBF6EC" />
      </div>
    </div>
  );
}
