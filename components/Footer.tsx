import Link from "next/link";
import { RESTAURANT, NAV } from "@/lib/data";
import { Instagram } from "lucide-react";
import LogoMark from "@/components/LogoMark";

export default function Footer() {
  return (
    <footer className="bg-ink text-smoke pt-16 md:pt-20">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <LogoMark height={30} color="var(--color-bone)" />
          <p className="max-w-[32ch] mt-4 text-[15px] leading-relaxed">
            Sakarya Serdivan'da açık büfe kahvaltı, közde mangal et çeşitleri ve döner. Ateşin ustalığı bir sofrada.
          </p>
          <div className="flex gap-3 mt-4">
            <a href={RESTAURANT.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram"
               className="w-10 h-10 grid place-items-center rounded-full ring-1 ring-white/15 hover:ring-terra hover:text-terrahi transition">
              <Instagram className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-sans text-xs font-extrabold tracking-[0.2em] uppercase text-goldsoft mb-4">Menü</h4>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li><Link href="/menu" className="hover:text-bone transition">Et Lokantası</Link></li>
            <li><Link href="/kahvalti" className="hover:text-bone transition">Açık Büfe Kahvaltı</Link></li>
            <li><Link href="/menu#doner" className="hover:text-bone transition">Döner</Link></li>
            <li><Link href="/menu" className="hover:text-bone transition">Tüm Menü</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-extrabold tracking-[0.2em] uppercase text-goldsoft mb-4">Kurumsal</h4>
          <ul className="flex flex-col gap-2 text-[15px]">
            {NAV.filter(n => n.href !== "/menu").map(n => (
              <li key={n.href}><Link href={n.href} className="hover:text-bone transition">{n.label}</Link></li>
            ))}
            <li><Link href="/rezervasyon" className="hover:text-bone transition">Rezervasyon</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-xs font-extrabold tracking-[0.2em] uppercase text-goldsoft mb-4">İletişim</h4>
          <ul className="flex flex-col gap-2 text-[15px]">
            <li>Kazımpaşa Mah. 18 Nisan Cad.</li>
            <li>Serdivan / Sakarya</li>
            <li><a href="tel:+905442721144" className="hover:text-bone transition">0544 272 11 44</a></li>
            <li><a href={RESTAURANT.mapsLink} target="_blank" rel="noopener" className="hover:text-bone transition">Yol Tarifi</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 mt-12 md:mt-16 border-t border-white/10 py-6 flex flex-wrap justify-between gap-3 text-[13px] text-smoke/80">
        <span>© 2026 Levent Et. Tüm hakları saklıdır.</span>
        <span>Sakarya · Serdivan · Kazımpaşa</span>
      </div>
    </footer>
  );
}
