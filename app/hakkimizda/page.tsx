import type { Metadata } from "next";
import Frame from "@/components/Frame";
import FaqAccordion from "@/components/FaqAccordion";
import { Script, Acc, SectionHead } from "@/components/Bits";
import { IMAGES } from "@/lib/data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "Levent Et, Sakarya Serdivan'da açık büfe kahvaltı ve közde mangal et sunan bir restorandır. Ocak & Toprak hikayemiz.",
  alternates: { canonical: "/hakkimizda" },
};

export default function Page() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-cream">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 text-center">
          <Script>Hakkımızda</Script>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] mt-2 reveal">Ocak &amp; Toprak <Acc>Hikayemiz.</Acc></h1>
          <p className="mt-5 max-w-[60ch] mx-auto text-pale reveal d1">
            2018'de Sakarya Serdivan'da kurulan Levent Et, geleneksel lezzetleri modern bir dokunuşla buluşturur.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Frame src={IMAGES.interior} alt="Levent Et iç mekan" shape="arch" className="aspect-[5/6] max-w-[520px] imgrise reveal" />
          <div>
            <h2 className="font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] reveal">İyi sofra, iyi malzeme ve emekle başlar.</h2>
            <p className="mt-5 text-pale reveal d1">
              Köz ateşinin sıcaklığıyla hazırlanan etlerimiz ve zengin açık büfe kahvaltımızla keyifli anlar sunuyoruz.
              Sabahları açık büfe kahvaltı, öğle ve akşam ise közde et çeşitleri ve döner.
            </p>
            <p className="mt-4 text-pale reveal d1">
              İlkemiz basit: misafire içten bir sofra, közün başından ayrılmayan bir mutfak ve özenle hazırlanan tabaklar.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-8 reveal d2">
              <div><b className="font-serif text-2xl text-terradeep block">2018</b><span className="text-sm text-pale">Serdivan’da kuruluş</span></div>
              <div><b className="font-serif text-2xl text-terradeep block">Köz Ateşi</b><span className="text-sm text-pale">Mangalda pişen etler</span></div>
            </div>
            <p className="mt-8 font-script text-4xl text-terra leading-[.6] reveal d2">Levent Et</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <SectionHead eyebrow="Sıkça Sorulan Sorular" title={<>Merak <Acc>edilenler.</Acc></>} />
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
