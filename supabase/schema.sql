-- ============================================================
-- Levent Et — Supabase şeması (tablolar + RLS + storage)
-- Supabase → SQL Editor'da bir kez çalıştırın.
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  "order" int default 0,
  created_at timestamptz default now()
);

create table if not exists menu_items (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  price numeric,
  unit text,
  category_id uuid references categories(id) on delete set null,
  image_url text,
  featured boolean default false,
  "order" int default 0,
  created_at timestamptz default now()
);

create table if not exists gallery (
  id uuid primary key default gen_random_uuid(),
  image_url text not null,
  alt text,
  shape text default 'round',
  "order" int default 0,
  created_at timestamptz default now()
);

create table if not exists faqs (
  id uuid primary key default gen_random_uuid(),
  question text not null,
  answer text not null,
  "order" int default 0,
  created_at timestamptz default now()
);

create table if not exists settings (
  id int primary key default 1,
  phone text, phone_intl text, whatsapp text, instagram text,
  address text, district text, city text,
  hours_note text, hours jsonb default '[]'::jsonb,
  maps_link text, lat double precision, lng double precision, site_url text,
  constraint settings_singleton check (id = 1)
);
insert into settings (id) values (1) on conflict (id) do nothing;

-- RLS: herkes okur, yazma yalnızca service-role (panel) üzerinden
alter table categories enable row level security;
alter table menu_items enable row level security;
alter table gallery   enable row level security;
alter table faqs      enable row level security;
alter table settings  enable row level security;

do $$
begin
  create policy "public read categories" on categories for select using (true);
  create policy "public read menu"       on menu_items for select using (true);
  create policy "public read gallery"    on gallery    for select using (true);
  create policy "public read faqs"       on faqs       for select using (true);
  create policy "public read settings"   on settings   for select using (true);
exception when duplicate_object then null;
end $$;

-- Storage: görseller için public bucket
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;
