import type { Metadata } from "next";
import GalleryItem from "@/components/GalleryItem";
import { Script, Acc } from "@/components/Bits";
import { IMAGES, RESTAURANT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galeri",
  description: "Levent Et galerisi: mekândan, mangaldan, açık büfe kahvaltıdan ve sofralardan kareler. Sakarya Serdivan.",
  alternates: { canonical: "/galeri" },
};

const shapes = ["arch", "round", "circle", "round", "round", "circle", "round", "arch"] as const;

export default function Page() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        <div className="text-center">
          <Script>Galeri</Script>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] mt-2 reveal">Ocağın <Acc>başından.</Acc></h1>
          <p className="mt-4 max-w-[54ch] mx-auto text-pale reveal d1">
            Güncel kareler için <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener" className="text-terra font-bold">@levent_et</a>.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">
          {IMAGES.gallery.map((g, i) => (
            <GalleryItem key={i} src={g.src} alt={g.title} shape={shapes[i % shapes.length]} className="aspect-square reveal" />
          ))}
        </div>
      </div>
    </section>
  );
}
