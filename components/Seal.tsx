export default function Seal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <circle cx="100" cy="100" r="100" className="fill-forest" />
      <defs>
        <path id="sealPath" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <text className="fill-bone" style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: 2 }}>
        <textPath href="#sealPath" startOffset="0">KÖZ ATEŞİ · SERDİVAN · SAKARYA · LEVENT ET · </textPath>
      </text>
      <text x="100" y="112" textAnchor="middle" className="fill-gold" style={{ fontFamily: "var(--font-serif)", fontSize: 40, fontWeight: 700 }}>54</text>
    </svg>
  );
}
