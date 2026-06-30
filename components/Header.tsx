"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, Phone, Instagram } from "lucide-react";
import LogoMark from "@/components/LogoMark";
import { NAV } from "@/lib/data";

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      {/* Üst şerit */}
      <div className="bg-forest text-bone text-[13px]">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between py-2 gap-4">
          <span className="hidden sm:inline-flex items-center gap-1.5 opacity-90">
            <MapPin className="w-3.5 h-3.5 text-goldsoft shrink-0" />
            Kazımpaşa Mah. 18 Nisan Cad. · Serdivan / Sakarya
          </span>
          <span className="flex gap-5 items-center">
            <a href="tel:+905442721144" className="inline-flex items-center gap-1.5 text-goldsoft hover:text-white transition">
              <Phone className="w-3.5 h-3.5 shrink-0" /> 0544 272 11 44
            </a>
            <a href="https://www.instagram.com/levent_et/" target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 text-goldsoft hover:text-white transition">
              <Instagram className="w-3.5 h-3.5 shrink-0" /> @levent_et
            </a>
          </span>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-shadow backdrop-blur-md ${solid ? "bg-ivory/90 shadow-[0_1px_0_rgba(33,26,18,.14)]" : "bg-ivory/70"}`}>
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between gap-6 py-4">
          <Link href="/" aria-label="Levent Et — Anasayfa" className="shrink-0">
            <LogoMark height={48} animate ember />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => {
              const active = pathname === n.href;
              return (
                <Link key={n.href} href={n.href}
                  className={`text-sm font-semibold relative py-1 transition ${active ? "text-terra" : "text-pale hover:text-ink"}`}>
                  {n.label}
                  <span className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-terra transition-all ${active ? "w-full" : "w-0"}`} />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/rezervasyon" className="hidden sm:inline-flex bg-terra hover:bg-terrahi text-white font-bold text-sm px-5 py-2.5 rounded transition hover:-translate-y-0.5">
              Rezervasyon
            </Link>
            <button onClick={() => setOpen(true)} className="lg:hidden text-ink" aria-label="Menü"><Menu className="w-7 h-7" /></button>
          </div>
        </div>
      </header>

      {/* Mobil menü */}
      <div className={`fixed inset-0 z-[60] bg-ivory transition-transform duration-500 lg:hidden ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center px-5 py-4 border-b border-ink/10">
          <LogoMark height={30} />
          <button onClick={() => setOpen(false)} aria-label="Kapat"><X className="w-7 h-7" /></button>
        </div>
        <nav className="flex flex-col px-5">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="font-serif text-3xl py-4 border-b border-ink/10">{n.label}</Link>
          ))}
          <Link href="/rezervasyon" className="font-serif text-3xl py-4 text-terra">Rezervasyon →</Link>
        </nav>
      </div>
    </>
  );
}
