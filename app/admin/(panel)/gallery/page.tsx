import { createClient } from "@/lib/supabase/server";
import { addGalleryItem, deleteGalleryItem } from "../../actions";
import type { GalleryItem } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";
const inp = "w-full px-3 py-2 rounded-lg border border-ink/15 focus:border-terra outline-none text-sm";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("gallery").select("*").order("order");
  const items = (data || []) as GalleryItem[];
  return (
    <div>
      <h1 className="font-serif text-2xl mb-6">Galeri</h1>
      <form action={addGalleryItem} className="bg-white rounded-xl ring-1 ring-ink/10 p-4 mb-6 flex gap-3 items-end flex-wrap">
        <div className="flex-1 min-w-44"><label className="text-xs text-ink/60">Görsel</label><input name="image" type="file" accept="image/*" required className="block text-sm" /></div>
        <div className="flex-1 min-w-40"><label className="text-xs text-ink/60">Açıklama (alt)</label><input name="alt" className={inp} /></div>
        <div className="w-32">
          <label className="text-xs text-ink/60">Biçim</label>
          <select name="shape" className={inp} defaultValue="round">
            <option value="round">Yuvarlak köşe</option>
            <option value="arch">Kemer</option>
            <option value="circle">Daire</option>
          </select>
        </div>
        <div className="w-20"><label className="text-xs text-ink/60">Sıra</label><input name="order" type="number" defaultValue={items.length} className={inp} /></div>
        <button className="px-4 py-2 rounded-lg bg-terra text-white text-sm">Yükle</button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((g) => (
          <div key={g.id} className="bg-white rounded-xl ring-1 ring-ink/10 p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={g.image_url} alt={g.alt || ""} className="w-full h-32 object-cover rounded-lg" />
            <div className="flex items-center justify-between px-1 pt-2">
              <span className="text-xs text-ink/55 truncate">{g.alt || g.shape}</span>
              <form action={deleteGalleryItem}><input type="hidden" name="id" value={g.id} /><button className="text-red-600 hover:bg-red-50 rounded px-2 py-1 text-xs">Sil</button></form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
