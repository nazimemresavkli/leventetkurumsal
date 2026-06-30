import { createClient } from "@/lib/supabase/server";
import { saveSettings } from "../../actions";
import type { Settings } from "@/lib/supabase/types";

export const dynamic = "force-dynamic";
const inp = "w-full px-3 py-2 rounded-lg border border-ink/15 focus:border-terra outline-none text-sm";
const Field = ({ label, name, val, type = "text" }: { label: string; name: string; val: string | number | null; type?: string }) => (
  <div><label className="text-xs text-ink/60">{label}</label><input name={name} type={type} defaultValue={val ?? ""} className={inp} /></div>
);

export default async function Page() {
  const supabase = await createClient();
  const { data } = await supabase.from("settings").select("*").eq("id", 1).single();
  const s = (data || {}) as Partial<Settings>;
  const hours = (s.hours || []).concat([{ label: "", value: "" }, { label: "", value: "" }]);
  return (
    <div>
      <h1 className="font-serif text-2xl mb-6">Restoran Ayarları</h1>
      <form action={saveSettings} className="bg-white rounded-xl ring-1 ring-ink/10 p-5 space-y-4 max-w-2xl">
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="Telefon (görünen)" name="phone" val={s.phone ?? ""} />
          <Field label="Telefon (uluslararası +90...)" name="phone_intl" val={s.phone_intl ?? ""} />
          <Field label="WhatsApp linki" name="whatsapp" val={s.whatsapp ?? ""} />
          <Field label="Instagram linki" name="instagram" val={s.instagram ?? ""} />
        </div>
        <Field label="Adres" name="address" val={s.address ?? ""} />
        <div className="grid md:grid-cols-2 gap-4">
          <Field label="İlçe" name="district" val={s.district ?? ""} />
          <Field label="İl" name="city" val={s.city ?? ""} />
        </div>
        <Field label="Saat notu" name="hours_note" val={s.hours_note ?? ""} />
        <div>
          <label className="text-xs text-ink/60">Çalışma saatleri</label>
          <div className="space-y-2 mt-1">
            {hours.map((h, i) => (
              <div key={i} className="flex gap-2">
                <input name="hours_label" defaultValue={h.label} placeholder="Gün / öğün" className={inp} />
                <input name="hours_value" defaultValue={h.value} placeholder="08:00 – 12:00" className={inp} />
              </div>
            ))}
          </div>
        </div>
        <Field label="Google Maps linki" name="maps_link" val={s.maps_link ?? ""} />
        <div className="grid md:grid-cols-3 gap-4">
          <Field label="Enlem (lat)" name="lat" val={s.lat ?? ""} type="number" />
          <Field label="Boylam (lng)" name="lng" val={s.lng ?? ""} type="number" />
          <Field label="Site adresi" name="site_url" val={s.site_url ?? ""} />
        </div>
        <button className="px-5 py-2.5 rounded-lg bg-terra text-white text-sm">Kaydet</button>
      </form>
    </div>
  );
}
