import type { Metadata } from "next";
import MenuExplorer from "@/components/MenuExplorer";
import { Acc, Script } from "@/components/Bits";

export const metadata: Metadata = {
  title: "Menü",
  description: "Levent Et görselli menüsü: közde mangal et çeşitleri (antrikot, pirzola, şiş, köfte), açık büfe kahvaltı ve döner. Örnek fiyatlarla; güncel fiyat için arayın.",
  alternates: { canonical: "/menu" },
};

export default function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center">
          <Script>Menü</Script>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] mt-2 reveal">Sofranın <Acc>tamamı.</Acc></h1>
          <p className="mt-4 max-w-[58ch] mx-auto text-pale reveal d1">
            Közün başından sofranıza. Fiyatlar bilgilendirme amaçlıdır; mevsime göre değişebilir,
            güncel fiyatlar için lütfen arayın.
          </p>
        </div>

        <MenuExplorer />

        <p className="text-center mt-14 text-pale reveal">
          Güncel menü ve fiyatlar için: <a href="tel:+905442721144" className="text-terra font-bold">0544 272 11 44</a> ·{" "}
          <a href="https://api.whatsapp.com/send?phone=905442721144&text=Merhabalar" target="_blank" rel="noopener" className="text-terra font-bold">WhatsApp</a>
        </p>
      </div>
    </section>
  );
}
