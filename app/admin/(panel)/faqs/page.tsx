import { createClient } from "@/lib/supabase/server";
import { saveFaq, deleteFaq } from "../../actions";
import type { Faq } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";
const inp = "w-full px-3 py-2 rounded-lg border border-ink/15 focus:border-terra outline-none text-sm";

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("faqs").select("*").order("order");
  const faqs = (data || []) as Faq[];
  return (
    <div>
      <h1 className="font-serif text-2xl mb-6">Sık Sorulan Sorular</h1>
      <form action={saveFaq} className="bg-white rounded-xl ring-1 ring-ink/10 p-4 mb-6 space-y-3">
        <div><label className="text-xs text-ink/60">Soru</label><input name="question" required className={inp} /></div>
        <div><label className="text-xs text-ink/60">Cevap</label><textarea name="answer" required rows={2} className={inp} /></div>
        <div className="flex items-end gap-3">
          <div className="w-20"><label className="text-xs text-ink/60">Sıra</label><input name="order" type="number" defaultValue={faqs.length} className={inp} /></div>
          <button className="px-4 py-2 rounded-lg bg-terra text-white text-sm">Ekle</button>
        </div>
      </form>
      <div className="space-y-3">
        {faqs.map((f) => (
          <div key={f.id} className="bg-white rounded-xl ring-1 ring-ink/10 p-4">
            <form action={saveFaq} className="space-y-3">
              <input type="hidden" name="id" value={f.id} />
              <div><label className="text-xs text-ink/60">Soru</label><input name="question" defaultValue={f.question} className={inp} /></div>
              <div><label className="text-xs text-ink/60">Cevap</label><textarea name="answer" defaultValue={f.answer} rows={2} className={inp} /></div>
              <div className="flex items-end gap-3">
                <div className="w-20"><label className="text-xs text-ink/60">Sıra</label><input name="order" type="number" defaultValue={f.order} className={inp} /></div>
                <button className="px-3 py-2 rounded-lg bg-ink/80 text-white text-sm">Kaydet</button>
                <button formAction={deleteFaq} className="px-3 py-2 rounded-lg text-red-600 hover:bg-red-50 text-sm">Sil</button>
              </div>
            </form>
          </div>
        ))}
      </div>
    </div>
  );
}
