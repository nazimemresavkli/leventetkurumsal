import type { Metadata } from "next";
import MapView from "@/components/MapView";
import { Script, Acc, GhostLink } from "@/components/Bits";
import { RESTAURANT } from "@/lib/data";
import { MapPin, Phone, Instagram, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Levent Et iletişim: Kazımpaşa Mah. 18 Nisan Cad., Serdivan / Sakarya. Telefon 0544 272 11 44, Instagram @levent_et. Yol tarifi ve harita.",
  alternates: { canonical: "/iletisim" },
};

export default function Page() {
  const rows = [
    { icon: <MapPin className="w-[18px] h-[18px]" />, label: "Adres", value: <>Kazımpaşa Mah. 18 Nisan Cad.<br />Serdivan / Sakarya</> },
    { icon: <Phone className="w-[18px] h-[18px]" />, label: "Telefon", value: <a href="tel:+905442721144" className="hover:text-terra transition">{RESTAURANT.phone}</a> },
    { icon: <Instagram className="w-[18px] h-[18px]" />, label: "Instagram", value: <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener" className="hover:text-terra transition">@levent_et</a> },
    { icon: <Clock className="w-[18px] h-[18px]" />, label: "Çalışma Saatleri", value: <>Her gün · <span className="text-pale text-sm">güncel saatler için arayın</span></> },
  ];
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center">
          <Script>İletişim</Script>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] mt-2 reveal">Sizi <Acc>bekliyoruz.</Acc></h1>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 mt-14 items-start">
          <div className="reveal">
            {rows.map((r) => (
              <div key={r.label} className="group flex gap-4 items-start py-5 border-b border-ink/10 last:border-0">
                <span className="w-11 h-11 rounded-xl bg-cream grid place-items-center text-terra shrink-0 ring-1 ring-transparent transition-all duration-300 ease-out group-hover:bg-terra group-hover:text-cream group-hover:-translate-y-0.5 group-hover:ring-terra/30 group-hover:shadow-[0_12px_26px_-10px_rgba(193,90,55,.7)]">{r.icon}</span>
                <div><span className="text-[11px] uppercase tracking-[0.16em] text-pale">{r.label}</span><b className="block font-semibold mt-0.5 text-lg">{r.value}</b></div>
              </div>
            ))}
            <div className="mt-6"><GhostLink href={RESTAURANT.mapsLink}>Yol Tarifi Al <ArrowRight className="w-4 h-4" /></GhostLink></div>
          </div>
          <MapView className="reveal d1 h-full min-h-[420px]" />
        </div>
      </div>
    </section>
  );
}
