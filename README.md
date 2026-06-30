# Levent Et — Kurumsal Web Sitesi

Sakarya / Serdivan'da hizmet veren **Levent Et** (açık büfe kahvaltı · közde mangal et · döner, 2018) için kurumsal web sitesi.

## Teknolojiler
- **Next.js 16** (App Router, SSR/SSG) · **React 19** · **TypeScript**
- **Tailwind CSS v4** · **lucide-react** · **Leaflet** (iletişim haritası)
- Birebir vektör logo (SVG), sayfa-geçiş yaprak animasyonu, görselli & fiyatlı menü
- SEO + GEO (yapay zeka botları için yapısal veri, robots, sitemap, llms.txt)

## Yerelde çalıştırma
```bash
npm install
npm run dev      # http://localhost:3000
```
Üretim derlemesi:
```bash
npm run build && npm start
```

## Vercel'e yayınlama
1. [vercel.com](https://vercel.com) → **Add New → Project → Import Git Repository**
2. Bu repoyu (`leventetkurumsal`) seç. Framework otomatik **Next.js** algılanır.
3. Build/Output/Install ayarlarına dokunma (varsayılanlar doğru). **Deploy**.
4. (İsteğe bağlı) **Settings → Domains**'ten `leventet.com.tr` alan adını bağla.

Ortam değişkeni (env) gerekmez.

## İçeriği düzenleme (tek dosya)
Tüm metin/fiyat/görsel/iletişim bilgisi **`lib/data.ts`** içindedir:
- `RESTAURANT` — telefon, adres, saatler, harita, koordinat
- `MENU` — ürün adı, açıklama, **fiyat** (şu an ÖRNEK), kategori, görsel
- `IMAGES` — galeri ve bölüm görselleri (gerçek fotoğraflarla değiştir)
- `FAQ` — sık sorulan sorular

> Menüdeki fiyatlar ve çalışma saatleri **örnektir**; gerçek değerlerle güncelleyin.

## Logo
`public/logo.svg` — marka renginde (#50353A) birebir vektör. Bileşen: `components/LogoMark.tsx`.

## Yönetim Paneli (Supabase + özel panel)
Giriş yaptıktan sonra **`/admin`** üzerinden menü, fiyat, görsel, galeri, SSS ve
restoran bilgileri yönetilir. Veritabanı/auth/görsel deposu **Supabase**.
Kurulum adımları: **`KURULUM-PANEL.md`**.
Ortam değişkenleri: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`,
`SUPABASE_SERVICE_ROLE_KEY`.
