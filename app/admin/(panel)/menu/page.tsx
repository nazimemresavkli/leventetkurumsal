import { createClient } from "@/lib/supabase/server";
import { saveMenuItem, deleteMenuItem } from "../../actions";
import type { Category, MenuItem } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";
const inp = "w-full px-3 py-2 rounded-lg border border-ink/15 focus:border-terra outline-none text-sm";

function ItemForm({ item, cats }: { item?: MenuItem; cats: Category[] }) {
  return (
    <form action={saveMenuItem} className="bg-white rounded-xl ring-1 ring-ink/10 p-4 grid md:grid-cols-[88px_1fr] gap-4">
      <div>
        {item?.image_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.image_url} alt="" className="w-20 h-20 object-cover rounded-lg ring-1 ring-ink/10" />
        ) : (
          <div className="w-20 h-20 rounded-lg bg-cream grid place-items-center text-ink/30 text-xs">görsel yok</div>
        )}
      </div>
      <div className="space-y-3">
        {item && <input type="hidden" name="id" value={item.id} />}
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-44"><label className="text-xs text-ink/60">Ürün adı</label><input name="name" required defaultValue={item?.name} className={inp} /></div>
          <div className="w-28"><label className="text-xs text-ink/60">Fiyat (₺)</label><input name="price" type="number" step="any" defaultValue={item?.price ?? ""} className={inp} /></div>
          <div className="w-28"><label className="text-xs text-ink/60">Birim</label><input name="unit" defaultValue={item?.unit ?? ""} placeholder="kişi başı" className={inp} /></div>
        </div>
        <div><label className="text-xs text-ink/60">Açıklama</label><textarea name="description" rows={2} defaultValue={item?.description ?? ""} className={inp} /></div>
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-40">
            <label className="text-xs text-ink/60">Kategori</label>
            <select name="category_id" defaultValue={item?.category_id ?? ""} className={inp}>
              <option value="">— seçin —</option>
              {cats.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>
          </div>
          <div className="w-20"><label className="text-xs text-ink/60">Sıra</label><input name="order" type="number" defaultValue={item?.order ?? 0} className={inp} /></div>
          <label className="flex items-center gap-2 text-sm text-ink/70 pb-2"><input type="checkbox" name="featured" defaultChecked={item?.featured} /> Öne çıkan</label>
        </div>
        <div className="flex gap-3 flex-wrap items-end">
          <div className="flex-1 min-w-44"><label className="text-xs text-ink/60">Görsel {item ? "(değiştirmek için seçin)" : ""}</label><input name="image" type="file" accept="image/*" className="block text-sm" /></div>
          <button className="px-4 py-2 rounded-lg bg-terra text-white text-sm">{item ? "Kaydet" : "Ekle"}</button>
          {item && <button formAction={deleteMenuItem} className="px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 text-sm">Sil</button>}
        </div>
      </div>
    </form>
  );
}

export default async function Page() {
  const supabase = await createClient();
  const [{ data: catData }, { data: itemData }] = await Promise.all([
    supabase.from("categories").select("*").order("order"),
    supabase.from("menu_items").select("*").order("order"),
  ]);
  const cats = (catData || []) as Category[];
  const items = (itemData || []) as MenuItem[];
  return (
    <div className="space-y-4">
      <h1 className="font-serif text-2xl mb-2">Menü</h1>
      <details className="bg-white rounded-xl ring-1 ring-ink/10 p-4">
        <summary className="cursor-pointer font-medium text-terra">+ Yeni ürün ekle</summary>
        <div className="mt-4"><ItemForm cats={cats} /></div>
      </details>
      {items.map((it) => <ItemForm key={it.id} item={it} cats={cats} />)}
    </div>
  );
}
