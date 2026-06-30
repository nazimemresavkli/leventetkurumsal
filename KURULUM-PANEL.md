# Yönetim Paneli — Kurulum (Supabase)

Panel sitenin içinde çalışır: **`/admin/login`**'den giriş yapıp **`/admin`** üzerinden
menü, fiyat, görsel, galeri, SSS ve restoran bilgilerini yönetirsin.
Veritabanı, giriş (auth) ve görsel deposu **Supabase** (ücretsiz katman yeterli).

## 1) Supabase projesi
1. https://supabase.com → **New project** (bölge: Frankfurt/EU önerilir).
2. **SQL Editor** → `supabase/schema.sql` içeriğini yapıştır → **Run** (tabloları + `media` bucket'ını kurar).
3. Aynı yerde `supabase/seed.sql`'i çalıştır → mevcut menü/kategori/SSS/ayarlar yüklenir.
   (Görseller hariç; onları panelden yüklersin.)

## 2) API anahtarları → ortam değişkenleri
Supabase → **Project Settings → API**:
- `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `anon public` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `service_role` (GİZLİ) → `SUPABASE_SERVICE_ROLE_KEY`

`.env.example`'ı `.env` olarak kopyalayıp doldur. **Aynı 3 değişkeni Vercel'de de** tanımla
(Project → Settings → Environment Variables → Production + Preview).

## 3) Admin kullanıcısı oluştur
Supabase → **Authentication → Users → Add user** → e-posta + şifre gir,
**"Auto Confirm User"** işaretle. (Panelde kayıt ekranı yok; kullanıcılar buradan eklenir —
sahip + sen için ikişer hesap açabilirsin.)

## 4) Çalıştır
```bash
npm install
npm run dev
```
- Panel: http://localhost:3000/admin → 3. adımdaki e-posta/şifre ile giriş yap.
- Menü/Galeri'de **görselleri yükle** (Supabase Storage'a gider, herkese açık URL üretir).

## 5) Yayın (Vercel)
Env değişkenlerini ekledikten sonra `git push` → Vercel otomatik deploy.
Öneri: önce `panel` adlı bir dala push edip **Preview**'da `/admin`'i test et, sonra `main`'e birleştir.

## Güvenlik notu
- `SUPABASE_SERVICE_ROLE_KEY` **gizlidir**, yalnızca sunucuda kullanılır (asla tarayıcıya gitmez).
- Panel yazma işlemleri önce **giriş** kontrolünden geçer; herkese açık olan yalnızca *okuma*dır.

## Sonraki aşama
Panel çalıştığını doğrulayınca **site sayfalarını panelden okuyacak** şekilde bağlayacağım
(şu an `lib/data.ts`'ten okuyor). O zaman panelde yaptığın her değişiklik anında siteye yansıyacak.
