"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import LogoMark from "@/components/LogoMark";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setErr("");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { setErr("Giriş başarısız. E-posta veya şifre hatalı."); return; }
    router.push("/admin");
    router.refresh();
  };

  return (
    <div className="min-h-screen grid place-items-center bg-[#f4f1ea] px-4">
      <form onSubmit={submit} className="w-full max-w-sm bg-white rounded-2xl shadow-[0_30px_70px_-40px_rgba(60,35,15,.5)] ring-1 ring-ink/10 p-8">
        <div className="flex justify-center mb-6"><LogoMark height={42} /></div>
        <h1 className="text-center font-serif text-xl text-ink mb-1">Yönetim Paneli</h1>
        <p className="text-center text-sm text-ink/50 mb-6">Devam etmek için giriş yapın</p>
        <label className="block text-xs font-medium text-ink/60 mb-1">E-posta</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-3 py-2.5 rounded-lg border border-ink/15 focus:border-terra outline-none" />
        <label className="block text-xs font-medium text-ink/60 mb-1">Şifre</label>
        <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-5 px-3 py-2.5 rounded-lg border border-ink/15 focus:border-terra outline-none" />
        {err && <p className="text-sm text-red-600 mb-4">{err}</p>}
        <button type="submit" disabled={loading}
          className="w-full py-2.5 rounded-lg bg-terra text-white font-medium hover:bg-terradeep transition disabled:opacity-60">
          {loading ? "Giriş yapılıyor…" : "Giriş Yap"}
        </button>
      </form>
    </div>
  );
}
