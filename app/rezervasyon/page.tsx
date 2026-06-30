import type { Metadata } from "next";
import ReservationForm from "@/components/ReservationForm";
import { Script, Acc } from "@/components/Bits";
import { RESTAURANT } from "@/lib/data";
import { Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Rezervasyon",
  description: "Levent Et masa rezervasyonu. Sakarya Serdivan'da akşam mangal ya da hafta sonu açık büfe kahvaltı için yerinizi önceden ayırtın. 0544 272 11 44.",
  alternates: { canonical: "/rezervasyon" },
};

export default function Page() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-cream">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-start">
        <div>
          <Script>Rezervasyon</Script>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,3.6rem)] mt-2 reveal">Masanız hazır <Acc>olsun.</Acc></h1>
          <p className="mt-5 text-pale max-w-[44ch] reveal d1">
            Talebinizi aldıktan sonra sizi telefonla teyit ediyoruz. Dilerseniz doğrudan da ulaşabilirsiniz.
          </p>
          <div className="mt-8 space-y-4 reveal d1">
            <a href="tel:+905442721144" className="flex items-center gap-3 group">
              <span className="w-11 h-11 rounded-xl bg-cream grid place-items-center text-terra"><Phone className="w-5 h-5" /></span>
              <span><span className="block text-[11px] uppercase tracking-[0.16em] text-pale">Telefon</span><b className="font-serif text-xl group-hover:text-terra transition">{RESTAURANT.phone}</b></span>
            </a>
            <a href={RESTAURANT.whatsapp} target="_blank" rel="noopener" className="flex items-center gap-3 group">
              <span className="w-11 h-11 rounded-xl bg-cream grid place-items-center text-terra"><MessageCircle className="w-5 h-5" /></span>
              <span><span className="block text-[11px] uppercase tracking-[0.16em] text-pale">WhatsApp</span><b className="font-serif text-xl group-hover:text-terra transition">Yazışın →</b></span>
            </a>
          </div>
          <div className="mt-10 bg-forest text-bone rounded-2xl p-6 reveal d2">
            <h3 className="font-serif text-xl mb-3">Çalışma Saatleri</h3>
            {RESTAURANT.hours.map((h) => (
              <div key={h.label} className="flex justify-between py-2 border-b border-white/10 last:border-0 text-[15px]">
                <span>{h.label}</span><b className="text-goldsoft">{h.value}</b>
              </div>
            ))}
            <p className="text-xs text-smoke mt-3">{RESTAURANT.hoursNote}</p>
          </div>
        </div>
        <div className="reveal d1"><ReservationForm /></div>
      </div>
    </section>
  );
}
