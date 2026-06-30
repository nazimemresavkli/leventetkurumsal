import { RESTAURANT } from "@/lib/data";
export default function MapEmbed({ className = "" }: { className?: string }) {
  return (
    <div className={`rounded-2xl overflow-hidden ring-1 ring-ink/10 ${className}`}>
      <iframe title="Levent Et konum" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        src={RESTAURANT.mapEmbed} className="w-full h-full min-h-[340px] border-0" style={{ filter: "sepia(.15)" }} />
    </div>
  );
}
