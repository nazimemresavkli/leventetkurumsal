import Link from "next/link";
import { ArrowRight, Flame, Coffee, Beef } from "lucide-react";
import Frame from "@/components/Frame";
import GalleryItem from "@/components/GalleryItem";
import Seal from "@/components/Seal";
import FaqAccordion from "@/components/FaqAccordion";
import { Eyebrow, Script, SectionHead, Acc, PrimaryLink, GhostLink } from "@/components/Bits";
import { IMAGES, MENU, CATEGORIES, FAQ, SITE_URL } from "@/lib/data";

const featured = MENU.filter((m) => m.featured);

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question", name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* HERO */}
      <section className="relative bg-gradient-to-b from-ivory to-cream overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center pt-10 pb-16">
          <div className="lg:col-span-7">
            <Script>Köz ateşinde</Script>
            <h1 className="font-serif text-[clamp(2.9rem,6.6vw,5.4rem)] font-medium leading-[1.05] mt-3 reveal">
              Ustanın eli,<br /><Acc>sofranın bereketi.</Acc>
            </h1>
            <p className="mt-5 max-w-[46ch] text-pale text-[clamp(1rem,1.3vw,1.14rem)] reveal d1">
              Levent Et, Sakarya Serdivan'da açık büfe kahvaltı, közde mangal et çeşitleri ve dönerle
              keyifli sofralar kuran bir et restoranıdır.
            </p>
            <div className="flex flex-wrap gap-4 mt-8 reveal d2">
              <PrimaryLink href="/menu">Menüyü Keşfet <ArrowRight className="w-4 h-4" /></PrimaryLink>
              <GhostLink href="/rezervasyon">Rezervasyon</GhostLink>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-10 pt-7 border-t border-ink/10 reveal d3 max-w-xl">
              {[
                { icon: <Flame className="w-5 h-5" />, t: "Köz & Mangal", s: "Mangalda pişen etler" },
                { icon: <Coffee className="w-5 h-5" />, t: "Açık Büfe", s: "Zengin kahvaltı" },
                { icon: <Beef className="w-5 h-5" />, t: "Döner", s: "Et & tavuk" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3">
                  <span className="w-10 h-10 shrink-0 rounded-full bg-terra/10 text-terra grid place-items-center">{f.icon}</span>
                  <span className="flex flex-col"><b className="font-serif text-sm text-ink">{f.t}</b><span className="text-[11px] text-pale">{f.s}</span></span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end reveal d2">
            <div className="relative w-full max-w-[400px]">
              <Frame src={IMAGES.hero} alt="Levent Et közde mangal et" shape="arch" priority className="aspect-[4/5] imgrise border-[10px] border-white" />
              <Seal className="w-32 h-32 absolute -bottom-8 -left-8 animate-seal drop-shadow-xl" />
              <div className="absolute -right-3 top-10 bg-forest text-ivory p-4 rounded-lg shadow-xl max-w-[190px] border border-white/10">
                <span className="font-script text-2xl text-gold block -mb-1">Geleneksel</span>
                <p className="font-serif text-sm font-bold text-white">Köz Ateşi Aroması</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HAKKIMIZDA teaser */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative reveal">
            <Frame src={IMAGES.interior} alt="Levent Et iç mekan" shape="arch" className="aspect-[5/6] imgrise max-w-[520px]" />
          </div>
          <div>
            <Script>Hakkımızda</Script>
            <h2 className="font-serif text-[clamp(2rem,4.4vw,3.2rem)] mt-2 reveal d1">Ocak &amp; Toprak<br />Hikayemiz.</h2>
            <p className="mt-5 text-pale max-w-[48ch] reveal d1">
              Levent Et, 2018'den bu yana Sakarya Serdivan'da geleneksel lezzetleri modern bir dokunuşla buluşturur.
              Köz ateşinin sıcaklığıyla hazırlanan etler ve zengin açık büfe kahvaltımızla keyifli anlar sunuyoruz.
            </p>
            <p className="mt-4 text-pale max-w-[48ch] reveal d2">
              İlkemiz basit: iyi malzeme, közün başından ayrılmayan bir mutfak ve misafire içten bir sofra.
            </p>
            <div className="mt-7 reveal d2"><GhostLink href="/hakkimizda">Devamını Oku <ArrowRight className="w-4 h-4" /></GhostLink></div>
          </div>
        </div>
      </section>

      {/* ÜÇ SOFRA (pine) */}
      <section className="py-20 md:py-28 bg-forest text-bone">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <SectionHead eyebrow="Üç Sofra" light title={<>Tek mekânda üç ayrı <Acc>lezzet.</Acc></>}>
            Sabahları kurulan zengin açık büfe kahvaltı, közün başındaki et ustası ve ocağın önündeki döner.
          </SectionHead>
          <div className="grid sm:grid-cols-3 gap-8 mt-14">
            {[
              { img: IMAGES.et, t: "Et Lokantası", d: "Antrikot, bonfile, kuzu pirzola ve şişler; közün üzerinde.", href: "/menu#et" },
              { img: IMAGES.kahvalti, t: "Açık Büfe Kahvaltı", d: "Zengin sofra; peynir-zeytin, bal-kaymak, sıcak pişiler ve çay.", href: "/kahvalti" },
              { img: IMAGES.doner, t: "Döner", d: "Et ve tavuk döner; porsiyon, dürüm ve iskender seçenekleriyle.", href: "/menu#doner" },
            ].map((c, i) => (
              <div key={c.t} className={`text-center reveal ${i === 1 ? "d1" : i === 2 ? "d2" : ""}`}>
                <Frame src={c.img} alt={c.t} shape="circle" className="max-w-[260px] mx-auto imgrise" />
                <h3 className="font-serif text-2xl mt-6 mb-1">{c.t}</h3>
                <p className="text-smoke text-[15px] max-w-[32ch] mx-auto mb-4">{c.d}</p>
                <Link href={c.href} className="text-[13px] font-bold tracking-[0.18em] uppercase text-goldsoft inline-flex items-center gap-2 hover:gap-3 transition-all">İncele →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ÖNE ÇIKAN LEZZETLER */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <SectionHead script="Öne çıkanlar" title={<>Favori <Acc>lezzetler.</Acc></>}>
            Sofranın en çok sevilenleri. Güncel menü ve fiyatlar için bizi arayın.
          </SectionHead>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {featured.concat(MENU.filter(m => !m.featured).slice(0, 1)).slice(0, 4).map((m, i) => (
              <article key={m.name} className={`bg-ivory rounded-2xl overflow-hidden ring-1 ring-ink/5 shadow-sm hover:-translate-y-2 transition duration-500 reveal ${["", "d1", "d2", "d3"][i]}`}>
                <div className="group relative aspect-square overflow-hidden img-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IMAGES.feat[i]} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.06]" />
                </div>
                <div className="p-5 text-center">
                  <h4 className="font-serif text-lg">{m.name}</h4>
                  <span className="text-terra text-sm font-bold mt-1 block">Güncel fiyat için arayın</span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12 reveal"><PrimaryLink href="/menu">Tüm Menü <ArrowRight className="w-4 h-4" /></PrimaryLink></div>
        </div>
      </section>

      {/* LEZZET YOLCULUĞU */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative reveal">
            <Frame src={IMAGES.journeyBig} alt="Mangalda et" shape="round" className="aspect-[4/3] imgrise" />
            <Frame src={IMAGES.journeySmall} alt="Döner" shape="circle" className="absolute -right-5 -bottom-8 w-[46%] border-[6px] border-cream imgrise hidden sm:block" />
          </div>
          <div>
            <Script>Bir lezzet yolculuğu</Script>
            <h2 className="font-serif text-[clamp(2rem,4.4vw,3.2rem)] mt-2 reveal d1">Her tabakta<br />bir <Acc>emek var.</Acc></h2>
            <p className="mt-5 text-pale max-w-[46ch] reveal d1">
              Serpme kahvaltıdan akşam yemeğine, gün boyu süren bir lezzet yolculuğu. Etin seçiminden közün
              kıvamına, her aşamada aynı özen.
            </p>
            <p className="mt-6 font-script text-3xl text-terra leading-[.7] reveal d2">Levent Et</p>
            <p className="text-[13px] tracking-[0.1em] text-pale reveal d2">SERDİVAN · SAKARYA</p>
          </div>
        </div>
      </section>

      {/* ALINTI (pine) */}
      <section className="py-20 md:py-28 bg-forest text-bone">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <Frame src={IMAGES.chef} alt="Mangalda et" shape="round" className="aspect-[4/3] imgrise reveal" />
          <div className="reveal d1">
            <span className="font-serif text-6xl text-gold leading-[.5]">“</span>
            <blockquote className="font-serif italic text-[clamp(1.6rem,3vw,2.3rem)] leading-snug text-bone mt-2">
              İyi sofra; iyi malzeme, közün başından ayrılmayan bir mutfak ve misafire içten bir gülümsemeyle başlar.
            </blockquote>
            <cite className="block mt-6 not-italic text-[13px] tracking-[0.16em] uppercase text-goldsoft">— Levent Et Mutfağı</cite>
          </div>
        </div>
      </section>

      {/* REZERVASYON CTA */}
      <section className="py-20 md:py-24 bg-forest2 text-bone text-center">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8 reveal">
          <Eyebrow center>Rezervasyon</Eyebrow>
          <h2 className="font-serif text-[clamp(2.1rem,4.6vw,3.2rem)] text-bone mt-3 mb-3">Masanızı ayırtın.</h2>
          <p className="text-smoke mb-8 max-w-[46ch] mx-auto">Akşam mangal keyfi ya da hafta sonu açık büfe kahvaltı — yerinizi önceden ayırtın.</p>
          <PrimaryLink href="/rezervasyon">Rezervasyon Yap <ArrowRight className="w-4 h-4" /></PrimaryLink>
        </div>
      </section>

      {/* GALERİ teaser */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <SectionHead script="Galeri" title={<>Ocağın <Acc>başından.</Acc></>}>
            Mekândan, mangaldan ve sofralardan kareler.
          </SectionHead>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 reveal">
            {IMAGES.gallery.slice(0, 4).map((g, i) => (
              <GalleryItem key={i} src={g.src} alt={g.title} shape={i === 0 ? "arch" : "round"} className="aspect-[3/4]" />
            ))}
          </div>
          <div className="text-center mt-12 reveal"><GhostLink href="/galeri">Tüm Galeri <ArrowRight className="w-4 h-4" /></GhostLink></div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
          <SectionHead eyebrow="Sıkça Sorulan Sorular" title={<>Merak <Acc>edilenler.</Acc></>} />
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
