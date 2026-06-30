"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import LogoMark from "@/components/LogoMark";

// SSR güvenli layout-effect: overlay yeni sayfayla AYNI karede basılsın
// (böylece geçişte yeni sayfa bir kare önce görünüp kaybolmaz)
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const DURATION = 1100; // ms
const DELAY = 200;   // yumuşak giriş için bekleme
type Pt = [number, number];

function clipHalf(c: number, keepLE: boolean): Pt[] {
  const sq: Pt[] = [[0, 0], [100, 0], [100, 100], [0, 100]];
  const inside = (p: Pt) => (keepLE ? p[0] - p[1] <= c + 1e-9 : p[0] - p[1] >= c - 1e-9);
  const cut = (a: Pt, b: Pt): Pt => {
    const fa = a[0] - a[1] - c, fb = b[0] - b[1] - c;
    const t = fa / (fa - fb);
    return [a[0] + t * (b[0] - a[0]), a[1] + t * (b[1] - a[1])];
  };
  const out: Pt[] = [];
  for (let i = 0; i < sq.length; i++) {
    const cur = sq[i], nxt = sq[(i + 1) % sq.length];
    const ci = inside(cur), ni = inside(nxt);
    if (ci) { out.push(cur); if (!ni) out.push(cut(cur, nxt)); }
    else if (ni) out.push(cut(cur, nxt));
  }
  return out;
}
const reflect = (p: Pt, c: number): Pt => [p[1] + c, p[0] - c];
function toClip(pts: Pt[]) {
  if (pts.length < 3) return "polygon(0 0, 0 0, 0 0)";
  return "polygon(" + pts.map((p) => `${p[0].toFixed(2)}% ${p[1].toFixed(2)}%`).join(", ") + ")";
}
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function BookTransition() {
  const pathname = usePathname();
  const [playing, setPlaying] = useState(true);
  const coverRef = useRef<HTMLDivElement | null>(null);
  const flapRef = useRef<HTMLDivElement | null>(null);
  const rollRef = useRef<HTMLDivElement | null>(null);
  const first = useRef(true);

  useIsoLayoutEffect(() => {
    if (first.current) { first.current = false; return; }
    setPlaying(true);
  }, [pathname]);

  useEffect(() => {
    if (!playing) return;
    if (typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
      return;
    }
    const cover = coverRef.current, flap = flapRef.current, roll = rollRef.current;
    if (!cover) { setPlaying(false); return; }

    let raf = 0, start = 0;
    const step = (ts: number) => {
      if (!start) start = ts;
      let p = (ts - start - DELAY) / DURATION;
      if (p < 0) p = 0;
      if (p > 1) p = 1;
      const c = 100 - 200 * easeOut(p);

      const coverPts = clipHalf(c, true);
      const coverClip = toClip(coverPts);
      cover.style.clipPath = coverClip;
      (cover.style as any).webkitClipPath = coverClip;

      if (flap) {
        const fc = toClip(clipHalf(c, false).map((pt) => reflect(pt, c)));
        flap.style.clipPath = fc;
        (flap.style as any).webkitClipPath = fc;
      }

      // silindirik kıvrım kenarı (rulo) — fold çizgisi boyunca
      if (roll) {
        const vw = window.innerWidth, vh = window.innerHeight;
        const onFold = coverPts.filter((pt) => Math.abs(pt[0] - pt[1] - c) < 1e-2);
        if (onFold.length >= 2) {
          const [A, B] = onFold;
          const ax = (A[0] / 100) * vw, ay = (A[1] / 100) * vh;
          const bx = (B[0] / 100) * vw, by = (B[1] / 100) * vh;
          const mx = (ax + bx) / 2, my = (ay + by) / 2;
          const dx = bx - ax, dy = by - ay;
          const len = Math.hypot(dx, dy);
          const ang = Math.atan2(dy, dx);
          const thick = Math.max(16, Math.min(vw, vh) * 0.04);
          roll.style.width = `${len}px`;
          roll.style.height = `${thick}px`;
          roll.style.left = `${mx}px`;
          roll.style.top = `${my}px`;
          roll.style.transform = `translate(-50%, -50%) rotate(${ang}rad)`;
          roll.style.opacity = "1";
        } else {
          roll.style.opacity = "0";
        }
      }

      if (p < 1) raf = requestAnimationFrame(step);
      else setPlaying(false);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  if (!playing) return null;

  return (
    <div className="book-overlay" aria-hidden>
      <div ref={coverRef} className="book-cover">
        <div className="book-sheen" />
        <span className="book-rule" style={{ position: "absolute", inset: 26, border: "1px solid rgba(207,162,74,.22)", borderRadius: 4 }} />
        <span className="book-rule" style={{ position: "absolute", inset: 34, border: "1px solid rgba(207,162,74,.12)", borderRadius: 4 }} />
        <div className="relative z-[2] text-center px-8">
          <span className="font-script text-3xl text-gold block leading-none">Mirasımız</span>
          <div className="flex items-center justify-center my-4">
            <LogoMark height={86} />
          </div>
          <p className="font-sans font-bold text-[11px] tracking-[0.5em] uppercase text-pale">Ocak &amp; Toprak</p>
        </div>
      </div>
      <div ref={flapRef} className="book-flap" />
      <div ref={rollRef} className="book-roll" />
    </div>
  );
}
