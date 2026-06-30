"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

async function requireUser() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  return user;
}

async function uploadImage(file: File | null): Promise<string | null> {
  if (!file || file.size === 0) return null;
  const admin = createAdminClient();
  const ext = (file.name.split(".").pop() || "jpg").toLowerCase();
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
  const bytes = Buffer.from(await file.arrayBuffer());
  const { error } = await admin.storage.from("media").upload(path, bytes, {
    contentType: file.type || "image/jpeg",
    upsert: false,
  });
  if (error) throw error;
  return admin.storage.from("media").getPublicUrl(path).data.publicUrl;
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

/* ---------- Kategoriler ---------- */
export async function saveCategory(formData: FormData) {
  await requireUser();
  const admin = createAdminClient();
  const id = (formData.get("id") as string) || "";
  const row = {
    name: String(formData.get("name") || ""),
    slug: String(formData.get("slug") || ""),
    order: Number(formData.get("order") || 0),
  };
  if (id) await admin.from("categories").update(row).eq("id", id);
  else await admin.from("categories").insert(row);
  revalidatePath("/admin/categories");
}
export async function deleteCategory(formData: FormData) {
  await requireUser();
  await createAdminClient().from("categories").delete().eq("id", String(formData.get("id")));
  revalidatePath("/admin/categories");
}

/* ---------- Menü ---------- */
export async function saveMenuItem(formData: FormData) {
  await requireUser();
  const admin = createAdminClient();
  const id = (formData.get("id") as string) || "";
  const uploaded = await uploadImage(formData.get("image") as File | null);
  const row: Record<string, unknown> = {
    name: String(formData.get("name") || ""),
    description: String(formData.get("description") || "") || null,
    price: formData.get("price") ? Number(formData.get("price")) : null,
    unit: String(formData.get("unit") || "") || null,
    category_id: String(formData.get("category_id") || "") || null,
    featured: formData.get("featured") === "on",
    order: Number(formData.get("order") || 0),
  };
  if (uploaded) row.image_url = uploaded;
  if (id) await admin.from("menu_items").update(row).eq("id", id);
  else await admin.from("menu_items").insert(row);
  revalidatePath("/admin/menu");
}
export async function deleteMenuItem(formData: FormData) {
  await requireUser();
  await createAdminClient().from("menu_items").delete().eq("id", String(formData.get("id")));
  revalidatePath("/admin/menu");
}

/* ---------- Galeri ---------- */
export async function addGalleryItem(formData: FormData) {
  await requireUser();
  const url = await uploadImage(formData.get("image") as File | null);
  if (!url) return;
  await createAdminClient().from("gallery").insert({
    image_url: url,
    alt: String(formData.get("alt") || "") || null,
    shape: String(formData.get("shape") || "round"),
    order: Number(formData.get("order") || 0),
  });
  revalidatePath("/admin/gallery");
}
export async function deleteGalleryItem(formData: FormData) {
  await requireUser();
  await createAdminClient().from("gallery").delete().eq("id", String(formData.get("id")));
  revalidatePath("/admin/gallery");
}

/* ---------- SSS ---------- */
export async function saveFaq(formData: FormData) {
  await requireUser();
  const admin = createAdminClient();
  const id = (formData.get("id") as string) || "";
  const row = {
    question: String(formData.get("question") || ""),
    answer: String(formData.get("answer") || ""),
    order: Number(formData.get("order") || 0),
  };
  if (id) await admin.from("faqs").update(row).eq("id", id);
  else await admin.from("faqs").insert(row);
  revalidatePath("/admin/faqs");
}
export async function deleteFaq(formData: FormData) {
  await requireUser();
  await createAdminClient().from("faqs").delete().eq("id", String(formData.get("id")));
  revalidatePath("/admin/faqs");
}

/* ---------- Ayarlar ---------- */
export async function saveSettings(formData: FormData) {
  await requireUser();
  const labels = formData.getAll("hours_label").map(String);
  const values = formData.getAll("hours_value").map(String);
  const hours = labels
    .map((l, i) => ({ label: l.trim(), value: (values[i] || "").trim() }))
    .filter((h) => h.label || h.value);
  const num = (k: string) => (formData.get(k) ? Number(formData.get(k)) : null);
  const str = (k: string) => String(formData.get(k) || "") || null;
  await createAdminClient().from("settings").update({
    phone: str("phone"), phone_intl: str("phone_intl"), whatsapp: str("whatsapp"),
    instagram: str("instagram"), address: str("address"), district: str("district"),
    city: str("city"), hours_note: str("hours_note"), hours,
    maps_link: str("maps_link"), lat: num("lat"), lng: num("lng"), site_url: str("site_url"),
  }).eq("id", 1);
  revalidatePath("/admin/settings");
}
