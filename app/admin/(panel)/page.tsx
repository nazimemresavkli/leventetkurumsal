import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const supabase = await createClient();
  const [menu, cats, gal, faq] = await Promise.all([
    supabase.from("menu_items").select("id", { count: "exact", head: true }),
    supabase.from("categories").select("id", { count: "exact", head: true }),
    supabase.from("gallery").select("id", { count: "exact", head: true }),
    supabase.from("faqs").select("id", { count: "exact", head: true }),
  ]);
  const cards: [string, number, string][] = [
    ["Menü Ürünleri", menu.count ?? 0, "/admin/menu"],
    ["Kategoriler", cats.count ?? 0, "/admin/categories"],
    ["Galeri Görselleri", gal.count ?? 0, "/admin/gallery"],
    ["Sık Sorulanlar", faq.count ?? 0, "/admin/faqs"],
  ];
  return (
    <div>
      <h1 className="font-serif text-2xl mb-1">Genel Bakış</h1>
      <p className="text-ink/55 mb-6">Levent Et içerik yönetimi</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cards.map(([t, n, href]) => (
          <Link key={href} href={href} className="bg-white rounded-xl ring-1 ring-ink/10 p-5 hover:ring-terra/40 transition">
            <div className="text-3xl font-serif text-terra">{n}</div>
            <div className="text-sm text-ink/60 mt-1">{t}</div>
          </Link>
        ))}
      </div>
      <div className="bg-white rounded-xl ring-1 ring-ink/10 p-5 text-sm text-ink/70 leading-relaxed">
        Soldaki menüden bölümleri düzenleyebilirsiniz. Görseller doğrudan panele yüklenir ve
        Supabase Storage&apos;da saklanır. Yaptığınız değişiklikler kaydeder kaydetmez sitede yayınlanır.
      </div>
    </div>
  );
}
