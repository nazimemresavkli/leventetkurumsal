import type { Metadata } from "next";
import Frame from "@/components/Frame";
import { Script, Acc, PrimaryLink } from "@/components/Bits";
import { ArrowRight } from "lucide-react";
import { IMAGES, MENU } from "@/lib/data";

export const metadata: Metadata = {
  title: "Açık Büfe Kahvaltı",
  description: "Sakarya Serdivan'da Levent Et açık büfe kahvaltı: peynir ve zeytin çeşitleri, bal-kaymak, sıcak pişiler, menemen, sucuklu yumurta ve sınırsız demli çay.",
  alternates: { canonical: "/kahvalti" },
};

const items = MENU.filter((m) => m.category === "kahvalti");

export default function Page() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-cream">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Script>Sabahın bereketi</Script>
            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] mt-2 reveal">Açık Büfe <Acc>Kahvaltı.</Acc></h1>
            <p className="mt-5 text-pale max-w-[46ch] reveal d1">
              Zengin açık büfe soframızda peynir ve zeytin çeşitleri, bal-kaymak, reçeller, sıcak pişiler,
              menemen ve sucuklu yumurta gibi seçeneklerle birlikte sınırsız demli çay sizi bekliyor.
            </p>
            <div className="mt-7 reveal d2"><PrimaryLink href="/rezervasyon">Kahvaltı Rezervasyonu <ArrowRight className="w-4 h-4" /></PrimaryLink></div>
          </div>
          <Frame src={IMAGES.kahvalti} alt="Açık büfe kahvaltı" shape="arch" className="aspect-[5/6] max-w-[480px] mx-auto imgrise reveal d1" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8">
          <h2 className="font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] text-center mb-10 reveal">Kahvaltı sofrasından</h2>
          <div className="grid md:grid-cols-2 gap-x-16">
            {items.map((m) => (
              <div key={m.name} className="py-5 border-b border-dashed border-ink/15 reveal">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-xl">{m.name}</span>
                  <span className="flex-1 border-b border-dotted border-ink/20 -translate-y-1" />
                </div>
                <p className="text-pale text-sm mt-1">{m.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-12 text-pale reveal">
            Güncel kahvaltı fiyatı için: <a href="tel:+905442721144" className="text-terra font-bold">0544 272 11 44</a>
          </p>
        </div>
      </section>
    </>
  );
}
