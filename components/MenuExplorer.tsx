"use client";
import { useEffect, useState } from "react";
import { MENU, type Category } from "@/lib/data";

type Tab = "all" | Category;
const TABS: { key: Tab; label: string }[] = [
  { key: "all", label: "Tümü" },
  { key: "et", label: "Et Lokantası" },
  { key: "kahvalti", label: "Açık Büfe Kahvaltı" },
  { key: "doner", label: "Döner" },
];

const fmt = (n: number) => n.toLocaleString("tr-TR");

export default function MenuExplorer() {
  const [tab, setTab] = useState<Tab>("all");

  // footer/link anchor'larını (#et, #kahvalti, #doner) destekle
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    if (h === "et" || h === "kahvalti" || h === "doner") setTab(h as Tab);
  }, []);

  const items = MENU.filter((m) => tab === "all" || m.category === tab);

  return (
    <div>
      {/* Kategori sekmeleri */}
      <div className="flex flex-wrap justify-center gap-2.5 mt-8">
        {TABS.map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`menu-tab text-sm font-bold tracking-wide uppercase px-5 py-2.5 rounded-full ${
                active
                  ? "bg-terra text-white shadow-[0_10px_24px_-10px_rgba(192,85,46,.7)]"
                  : "text-pale ring-1 ring-ink/15 hover:text-ink hover:ring-ink/30"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Görselli kart ızgarası — kategori değişince yeniden canlanır (key) */}
      <div key={tab} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-12">
        {items.map((m, i) => (
          <article
            key={m.name}
            className="menu-card group rounded-2xl bg-ivory ring-1 ring-ink/5 shadow-[0_2px_0_rgba(33,26,18,.04)] hover:-translate-y-1.5 hover:shadow-[0_34px_60px_-34px_rgba(60,35,15,.45)] transition-all duration-500 overflow-hidden"
            style={{ animationDelay: `${i * 55}ms` }}
          >
            <div className="relative overflow-hidden img-frame aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.img}
                alt={m.name}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              {m.featured && <span className="menu-badge absolute top-3 left-3">Öne çıkan</span>}
              <span className="price-chip absolute bottom-3 right-3">
                {fmt(m.price)} ₺
              </span>
            </div>

            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-serif text-xl">{m.name}</h3>
                {m.unit && <span className="text-[11px] text-pale shrink-0">{m.unit}</span>}
              </div>
              <p className="text-pale text-sm mt-1.5">{m.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
