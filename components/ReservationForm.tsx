"use client";
import { useState, useEffect } from "react";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";

export default function ReservationForm() {
  const [ok, setOk] = useState(false);
  const [today, setToday] = useState("");
  useEffect(() => { setToday(new Date().toISOString().split("T")[0]); }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    if (!fd.get("name") || !fd.get("phone") || !fd.get("date") || !fd.get("time")) return;
    // TODO: gerçek gönderim -> fetch("/api/reservations", { method: "POST", body: JSON.stringify(...) })
    setOk(true);
    e.currentTarget.reset();
    setTimeout(() => setOk(false), 6000);
  };

  return (
    <form onSubmit={submit} className="bg-ivory rounded-2xl p-6 sm:p-8 shadow-[0_30px_70px_-40px_rgba(60,35,15,.4)] ring-1 ring-ink/5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Ad Soyad"><input name="name" required placeholder="Adınız" className="inp" /></Field>
        <Field label="Telefon"><input name="phone" required type="tel" placeholder="05__ ___ __ __" className="inp" /></Field>
        <Field label="Tarih"><div className="inp flex items-center gap-2"><Calendar className="w-4 h-4 text-terra" /><input name="date" required type="date" min={today} className="bg-transparent w-full outline-none" /></div></Field>
        <Field label="Saat"><div className="inp flex items-center gap-2"><Clock className="w-4 h-4 text-terra" /><input name="time" required type="time" className="bg-transparent w-full outline-none" /></div></Field>
        <Field label="Kişi Sayısı"><div className="inp flex items-center gap-2"><Users className="w-4 h-4 text-terra" /><select name="guests" className="bg-transparent w-full outline-none"><option>1 Kişi</option><option>2 Kişi</option><option>3 Kişi</option><option>4 Kişi</option><option>5 Kişi</option><option>6+ Kişi</option></select></div></Field>
        <Field label="Bölüm"><select name="section" className="inp"><option>Et Lokantası</option><option>Açık Büfe Kahvaltı</option><option>Döner</option></select></Field>
      </div>
      <Field label="Not (opsiyonel)"><textarea name="note" rows={3} placeholder="Özel istek, doğum günü, alerji vb." className="inp resize-none" /></Field>
      <button type="submit" className="mt-2 w-full bg-terra hover:bg-terrahi text-white font-bold py-4 rounded inline-flex items-center justify-center gap-2 transition hover:-translate-y-0.5">
        Rezervasyon Talebi Gönder <ArrowRight className="w-4 h-4" />
      </button>
      {ok && <p className="text-center mt-4 text-terradeep font-semibold">Talebiniz alındı. Sizi en kısa sürede telefonla teyit edeceğiz!</p>}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mb-2">
      <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-pale">{label}</span>
      {children}
    </label>
  );
}
