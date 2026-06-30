"use client";
import { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

type LB = { open: (src: string, alt?: string) => void };
const Ctx = createContext<LB | null>(null);

export function useLightbox() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLightbox must be used within LightboxProvider");
  return c;
}

const CLOSE_MS = 360; // açılışla aynı hız

export default function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [img, setImg] = useState<{ src: string; alt: string } | null>(null);
  const [closing, setClosing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = useCallback((src: string, alt = "") => {
    if (timer.current) clearTimeout(timer.current);
    setClosing(false);
    setImg({ src, alt });
  }, []);

  const close = useCallback(() => {
    setClosing(true); // ters animasyon: merkeze doğru küçülerek kaybolur
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setImg(null);
      setClosing(false);
    }, CLOSE_MS);
  }, []);

  useEffect(() => {
    if (!img) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [img, close]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {img && (
        <div className={`lb-backdrop${closing ? " is-closing" : ""}`} onClick={close} role="dialog" aria-modal="true">
          <button className="lb-close" onClick={close} aria-label="Kapat">×</button>
          <div className={`lb-frame${closing ? " is-closing" : ""}`} onClick={close}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} className="lb-img" />
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
