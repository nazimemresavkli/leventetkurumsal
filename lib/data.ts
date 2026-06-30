// ============================================================
// Levent Et — İçerik katmanı (tek kaynak)
// NOT: İçerikler doğrulanmış/güvenli ifadelerle yazılmıştır.
// FİYATLAR ÖRNEKTİR (placeholder) — gerçek fiyatlarla değiştirin.
// ============================================================

// Pexels stok görseller — yayından önce kendi fotoğraflarınızla değiştirin.
const px = (id: number, w = 700) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const RESTAURANT = {
  name: "Levent Et",
  subtitle: "Ocak & Toprak",
  tagline:
    "Sakarya Serdivan'da açık büfe kahvaltı, közde mangal et çeşitleri ve döner.",
  phone: "0544 272 11 44",
  phoneIntl: "+905442721144",
  whatsapp: "https://api.whatsapp.com/send?phone=905442721144&text=Merhabalar",
  email: "bilgi@leventet.com.tr",
  address: "Kazımpaşa Mah. 18 Nisan Cad., Serdivan / Sakarya",
  addressLines: ["Kazımpaşa Mah. 18 Nisan Cad.", "Serdivan / Sakarya"],
  instagram: "@levent_et",
  instagramUrl: "https://www.instagram.com/levent_et/",
  mapsLink: "https://maps.app.goo.gl/54tAHoyYY8VGCL4G7",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.4464052194435!2d30.276327111979853!3d40.796183171261625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccade2c47789c9%3A0x19ff61c65fee5925!2sLevent%20Et!5e0!3m2!1str!2str!4v1743909823300!5m2!1str!2str",
  coords: { lat: 40.796183, lng: 30.276327 },
  hours: [
    { label: "Kahvaltı", value: "08:00 – 12:00" },
    { label: "Öğle & Akşam", value: "12:00 – 24:00" },
    { label: "Döner Ocağı", value: "11:00 – 23:00" },
    { label: "Açık", value: "Her gün" },
  ],
  hoursNote: "* Saatler temsilîdir; güncel bilgi için lütfen arayın.",
};

export type Category = "et" | "kahvalti" | "doner";

export const CATEGORIES: { key: Category; title: string }[] = [
  { key: "et", title: "Et Lokantası" },
  { key: "kahvalti", title: "Açık Büfe Kahvaltı" },
  { key: "doner", title: "Döner" },
];

export interface MenuItem {
  name: string;
  desc: string;
  category: Category;
  price: number;     // ÖRNEK fiyat (TL) — gerçek fiyatlarla değiştirin
  unit?: string;     // örn. "kişi başı"
  img: string;
  featured?: boolean;
}

// price = ÖRNEK/placeholder. Gerçek fiyatlarla güncelleyin.
export const MENU: MenuItem[] = [
  // Et Lokantası
  { category: "et", featured: true, name: "Antrikot", desc: "Közde pişen dana antrikot, ustanın kontrolünde.", price: 680, img: px(14833802) },
  { category: "et", name: "Bonfile Izgara", desc: "Yumuşacık dana bonfile, sebze garnitür ile.", price: 720, img: px(1639558) },
  { category: "et", name: "Kuzu Pirzola", desc: "Közde kuzu pirzola, baharatın dengesinde.", price: 760, img: px(17988080) },
  { category: "et", name: "Kuzu Şiş", desc: "Marine kuzu şiş, közlenmiş biber ve domates ile.", price: 540, img: px(1857730) },
  { category: "et", name: "Tavuk Şiş", desc: "Marine tavuk şiş, közde pişer.", price: 360, img: px(769289) },
  { category: "et", name: "Adana Kebap", desc: "Közde, acılı veya acısız; közlenmiş sebze eşliğinde.", price: 420, img: px(361184) },
  { category: "et", name: "Kasap Köfte", desc: "El yapımı köfte, mangalın közünde.", price: 380, img: px(34170688) },
  { category: "et", name: "Karışık Izgara", desc: "Mangaldan seçme etler, paylaşımlık tabak.", price: 920, img: px(8477355) },

  // Açık Büfe Kahvaltı
  { category: "kahvalti", featured: true, name: "Açık Büfe Kahvaltı", desc: "Zengin sofra; çok çeşit, sıcak pişiler ve sınırsız çay.", price: 450, unit: "kişi başı", img: px(9491137) },
  { category: "kahvalti", name: "Sahanda Sucuklu Yumurta", desc: "Bakır sahanda, köy yumurtası ile.", price: 220, img: px(18543435) },
  { category: "kahvalti", name: "Menemen", desc: "Domates, biber ve köy yumurtasıyla.", price: 200, img: px(33389243) },
  { category: "kahvalti", name: "Bal & Kaymak", desc: "Taze ekmek eşliğinde bal ve kaymak.", price: 180, img: px(9491137) },
  { category: "kahvalti", name: "Peynir Çeşitleri", desc: "Açık büfede çeşit çeşit peynir ve zeytin.", price: 160, img: px(18543435) },
  { category: "kahvalti", name: "Sıcak Pişiler & Gözleme", desc: "Günün taze pişileri, börek ve gözlemeleri.", price: 150, img: px(33389243) },
  { category: "kahvalti", name: "Sınırsız Demli Çay", desc: "Kahvaltıya eşlik eden demli çay.", price: 60, img: px(33916166) },

  // Döner
  { category: "doner", featured: true, name: "Et Döner Porsiyon", desc: "Pilav ve közlenmiş biber eşliğinde et döner.", price: 380, img: px(24981551) },
  { category: "doner", name: "İskender", desc: "Tereyağı, yoğurt ve domates soslu et döner.", price: 460, img: px(361184) },
  { category: "doner", name: "Et Döner Dürüm", desc: "Lavaşta et döner, közlenmiş sebzeyle.", price: 260, img: px(24981551) },
  { category: "doner", name: "Pilav Üstü Döner", desc: "Tereyağlı pilav üzerinde et döner.", price: 360, img: px(1639558) },
  { category: "doner", name: "Tavuk Döner Porsiyon", desc: "Marine tavuk döner, pilav üstü.", price: 300, img: px(769289) },
  { category: "doner", name: "Tavuk Dürüm", desc: "Lavaşta tavuk döner, sos seçenekli.", price: 200, img: px(24981551) },
  { category: "doner", name: "Pidede Döner", desc: "Açık pide üzerinde et döner.", price: 340, img: px(1857730) },
];

export const FAQ: { q: string; a: string }[] = [
  { q: "Levent Et nerede?", a: "Levent Et, Sakarya Serdivan'da, Kazımpaşa Mahallesi 18 Nisan Caddesi üzerinde bulunur." },
  { q: "Levent Et'te neler sunuluyor?", a: "Açık büfe kahvaltı, közde mangal et çeşitleri (antrikot, pirzola, şiş, köfte) ve döner sunulur." },
  { q: "Açık büfe kahvaltıda neler var?", a: "Peynir ve zeytin çeşitleri, bal-kaymak, sıcak pişiler, menemen ve sucuklu yumurta gibi seçeneklerle birlikte sınırsız demli çay yer alır." },
  { q: "Rezervasyon nasıl yapılır?", a: "Web sitesindeki rezervasyon formunu doldurabilir, 0544 272 11 44'ü arayabilir veya WhatsApp üzerinden yazabilirsiniz." },
  { q: "İletişim ve sosyal medya?", a: "Telefon 0544 272 11 44, Instagram @levent_et." },
];

export const IMAGES = {
  hero: px(769289, 900),
  interior: px(30457533, 800),
  et: px(1639558, 600),
  kahvalti: px(9491137, 600),
  doner: px(24981551, 600),
  feat: [px(14833802, 520), px(361184, 520), px(8477355, 520), px(18543435, 520)],
  journeyBig: px(1857730, 760),
  journeySmall: px(24981551, 360),
  chef: px(8477355, 760),
  gallery: [
    { src: px(34170688, 800), title: "Mangal" },
    { src: px(776538, 700), title: "Mekan" },
    { src: px(9491137, 600), title: "Kahvaltı" },
    { src: px(1639558, 700), title: "Et" },
    { src: px(361184, 600), title: "Tabak" },
    { src: px(1857730, 700), title: "Köz" },
    { src: px(24981551, 600), title: "Döner" },
    { src: px(30457533, 700), title: "Salon" },
  ],
};

export const NAV = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Menü", href: "/menu" },
  { label: "Kahvaltı", href: "/kahvalti" },
  { label: "Galeri", href: "/galeri" },
  { label: "İletişim", href: "/iletisim" },
];

export const SITE_URL = "https://www.leventet.com.tr";
