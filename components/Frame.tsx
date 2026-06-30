type Shape = "arch" | "circle" | "round";
const radius: Record<Shape, string> = {
  arch: "arch",
  circle: "rounded-full aspect-square",
  round: "rounded-2xl",
};
export default function Frame({
  src, alt, shape = "round", className = "", priority = false,
}: { src: string; alt: string; shape?: Shape; className?: string; priority?: boolean }) {
  return (
    <div className={`relative overflow-hidden img-frame shadow-[0_36px_70px_-40px_rgba(60,35,15,.5)] ${radius[shape]} ${className} group`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading={priority ? "eager" : "lazy"}
        className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.06]" />
    </div>
  );
}
