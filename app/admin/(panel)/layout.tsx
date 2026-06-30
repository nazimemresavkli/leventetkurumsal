import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "../actions";
import LogoMark from "@/components/LogoMark";

export const dynamic = "force-dynamic";

const NAV: [string, string][] = [
  ["/admin", "Genel Bakış"],
  ["/admin/menu", "Menü"],
  ["/admin/categories", "Kategoriler"],
  ["/admin/gallery", "Galeri"],
  ["/admin/faqs", "Sık Sorulanlar"],
  ["/admin/settings", "Restoran Ayarları"],
];

export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  return (
    <div className="min-h-screen flex bg-[#f4f1ea] text-ink">
      <aside className="w-60 shrink-0 bg-white border-r border-ink/10 flex flex-col">
        <div className="p-5 border-b border-ink/10"><LogoMark height={30} /></div>
        <nav className="flex-1 p-3 space-y-1">
          {NAV.map(([href, label]) => (
            <Link key={href} href={href}
              className="block px-3 py-2 rounded-lg text-sm text-ink/75 hover:bg-cream hover:text-ink transition">
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-3 border-t border-ink/10">
          <p className="px-3 text-[11px] text-ink/45 truncate mb-2">{user.email}</p>
          <form action={signOut}>
            <button className="w-full text-left px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition">
              Çıkış Yap
            </button>
          </form>
          <Link href="/" target="_blank" className="block px-3 py-2 mt-1 rounded-lg text-sm text-ink/60 hover:bg-cream transition">
            Siteyi Görüntüle ↗
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 max-w-5xl mx-auto w-full">{children}</main>
    </div>
  );
}
