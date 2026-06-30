import { createClient } from "@/lib/supabase/server";
import { saveCategory, deleteCategory } from "../../actions";
import type { Category } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";
const inp = "w-full px-3 py-2 rounded-lg border border-ink/15 focus:border-terra outline-none text-sm";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("categories").select("*").order("order");
  const cats = (data || []) as Category[];
  return (
    <div>
      <h1 className="font-serif text-2xl mb-6">Kategoriler</h1>
      <form action={saveCategory} className="bg-white rounded-xl ring-1 ring-ink/10 p-4 mb-6 flex gap-3 items-end flex-wrap">
        <div className="flex-1 min-w-40"><label className="text-xs text-ink/60">Ad</label><input name="name" required className={inp} /></div>
        <div className="flex-1 min-w-32"><label className="text-xs text-ink/60">Anahtar (et / kahvalti / doner)</label><input name="slug" required className={inp} /></div>
        <div className="w-20"><label className="text-xs text-ink/60">Sıra</label><input name="order" type="number" defaultValue={cats.length} className={inp} /></div>
        <button className="px-4 py-2 rounded-lg bg-terra text-white text-sm">Ekle</button>
      </form>
      <div className="space-y-3">
        {cats.map((c) => (
          <div key={c.id} className="bg-white rounded-xl ring-1 ring-ink/10 p-4 flex gap-3 items-end flex-wrap">
            <form action={saveCategory} className="flex gap-3 items-end flex-wrap flex-1">
              <input type="hidden" name="id" value={c.id} />
              <div className="flex-1 min-w-40"><label className="text-xs text-ink/60">Ad</label><input name="name" defaultValue={c.name} className={inp} /></div>
              <div className="flex-1 min-w-32"><label className="text-xs text-ink/60">Anahtar</label><input name="slug" defaultValue={c.slug} className={inp} /></div>
              <div className="w-20"><label className="text-xs text-ink/60">Sıra</label><input name="order" type="number" defaultValue={c.order} className={inp} /></div>
              <button className="px-3 py-2 rounded-lg bg-ink/80 text-white text-sm">Kaydet</button>
            </form>
            <form action={deleteCategory}><input type="hidden" name="id" value={c.id} /><button className="px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 text-sm">Sil</button></form>
          </div>
        ))}
      </div>
    </div>
  );
}
