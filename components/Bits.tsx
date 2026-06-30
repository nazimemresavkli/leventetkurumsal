import Link from "next/link";

export function Eyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 text-[12px] font-bold tracking-[0.3em] uppercase text-terradeep ${center ? "justify-center" : ""}`}>
      <span className="h-px w-7 bg-terradeep/70" />{children}
    </span>
  );
}

export function Script({ children }: { children: React.ReactNode }) {
  return <span className="font-script text-terra text-[2.4rem] leading-[.6] block">{children}</span>;
}

export function SectionHead({ eyebrow, script, title, children, light }: {
  eyebrow?: string; script?: string; title: React.ReactNode; children?: React.ReactNode; light?: boolean;
}) {
  return (
    <div className="text-center max-w-[62ch] mx-auto reveal">
      {script ? <Script>{script}</Script> : eyebrow ? <Eyebrow center>{eyebrow}</Eyebrow> : null}
      <h2 className={`font-serif text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.05] mt-3 ${light ? "text-bone" : "text-ink"}`}>{title}</h2>
      {children && <p className={`mt-4 max-w-[54ch] mx-auto ${light ? "text-smoke" : "text-pale"}`}>{children}</p>}
    </div>
  );
}

export function Acc({ children }: { children: React.ReactNode }) {
  return <span className="italic text-terra">{children}</span>;
}

export function PrimaryLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 bg-terra hover:bg-terrahi text-white font-bold text-sm px-7 py-3.5 rounded transition hover:-translate-y-0.5">{children}</Link>;
}
export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="inline-flex items-center gap-2 font-bold text-sm px-7 py-3.5 rounded ring-1 ring-ink/15 hover:ring-terra hover:text-terra transition hover:-translate-y-0.5">{children}</Link>;
}
