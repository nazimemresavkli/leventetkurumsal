export type Category = { id: string; name: string; slug: string; order: number };
export type MenuItem = {
  id: string; name: string; description: string | null; price: number | null;
  unit: string | null; category_id: string | null; image_url: string | null;
  featured: boolean; order: number;
};
export type GalleryItem = { id: string; image_url: string; alt: string | null; shape: "round" | "arch" | "circle"; order: number };
export type Faq = { id: string; question: string; answer: string; order: number };
export type Settings = {
  id: number; phone: string | null; phone_intl: string | null; whatsapp: string | null;
  instagram: string | null; address: string | null; district: string | null; city: string | null;
  hours_note: string | null; hours: { label: string; value: string }[];
  maps_link: string | null; lat: number | null; lng: number | null; site_url: string | null;
};
