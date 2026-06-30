-- Levent Et — başlangıç içeriği (bir kez çalıştırın)
delete from menu_items; delete from categories; delete from faqs;

insert into categories (name, slug, "order") values ('Et Lokantası', 'et', 0);
insert into categories (name, slug, "order") values ('Açık Büfe Kahvaltı', 'kahvalti', 1);
insert into categories (name, slug, "order") values ('Döner', 'doner', 2);

insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Antrikot', 'Közde pişen dana antrikot, ustanın kontrolünde.', 680, null, true, 0, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Bonfile Izgara', 'Yumuşacık dana bonfile, sebze garnitür ile.', 720, null, false, 1, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Kuzu Pirzola', 'Közde kuzu pirzola, baharatın dengesinde.', 760, null, false, 2, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Kuzu Şiş', 'Marine kuzu şiş, közlenmiş biber ve domates ile.', 540, null, false, 3, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Tavuk Şiş', 'Marine tavuk şiş, közde pişer.', 360, null, false, 4, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Adana Kebap', 'Közde, acılı veya acısız; közlenmiş sebze eşliğinde.', 420, null, false, 5, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Kasap Köfte', 'El yapımı köfte, mangalın közünde.', 380, null, false, 6, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Karışık Izgara', 'Mangaldan seçme etler, paylaşımlık tabak.', 920, null, false, 7, (select id from categories where slug='et'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Açık Büfe Kahvaltı', 'Zengin sofra; çok çeşit, sıcak pişiler ve sınırsız çay.', 450, 'kişi başı', true, 8, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Sahanda Sucuklu Yumurta', 'Bakır sahanda, köy yumurtası ile.', 220, null, false, 9, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Menemen', 'Domates, biber ve köy yumurtasıyla.', 200, null, false, 10, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Bal & Kaymak', 'Taze ekmek eşliğinde bal ve kaymak.', 180, null, false, 11, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Peynir Çeşitleri', 'Açık büfede çeşit çeşit peynir ve zeytin.', 160, null, false, 12, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Sıcak Pişiler & Gözleme', 'Günün taze pişileri, börek ve gözlemeleri.', 150, null, false, 13, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Sınırsız Demli Çay', 'Kahvaltıya eşlik eden demli çay.', 60, null, false, 14, (select id from categories where slug='kahvalti'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Et Döner Porsiyon', 'Pilav ve közlenmiş biber eşliğinde et döner.', 380, null, true, 15, (select id from categories where slug='doner'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('İskender', 'Tereyağı, yoğurt ve domates soslu et döner.', 460, null, false, 16, (select id from categories where slug='doner'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Et Döner Dürüm', 'Lavaşta et döner, közlenmiş sebzeyle.', 260, null, false, 17, (select id from categories where slug='doner'));
insert into menu_items (name, description, price, unit, featured, "order", category_id) values ('Pilav Üstü Döner', 'Tereyağlı pilav üzerinde et döner.', 360, null, false, 18, (select id from categories where slug='doner'));

insert into faqs (question, answer, "order") values ('Levent Et nerede?', 'Levent Et, Sakarya Serdivan''da, Kazımpaşa Mahallesi 18 Nisan Caddesi üzerinde bulunur.', 0);
insert into faqs (question, answer, "order") values ('Levent Et''te neler sunuluyor?', 'Açık büfe kahvaltı, közde mangal et çeşitleri (antrikot, pirzola, şiş, köfte) ve döner sunulur.', 1);
insert into faqs (question, answer, "order") values ('Açık büfe kahvaltıda neler var?', 'Peynir ve zeytin çeşitleri, bal-kaymak, sıcak pişiler, menemen ve sucuklu yumurta gibi seçeneklerle birlikte sınırsız demli çay yer alır.', 2);
insert into faqs (question, answer, "order") values ('Rezervasyon nasıl yapılır?', 'Web sitesindeki rezervasyon formunu doldurabilir, 0544 272 11 44''ü arayabilir veya WhatsApp üzerinden yazabilirsiniz.', 3);
insert into faqs (question, answer, "order") values ('İletişim ve sosyal medya?', 'Telefon 0544 272 11 44, Instagram @levent_et.', 4);

update settings set phone='0544 272 11 44', phone_intl='+905442721144', whatsapp='https://api.whatsapp.com/send?phone=905442721144&text=Merhabalar', instagram='https://www.instagram.com/levent_et/', address='Kazımpaşa Mah. 18 Nisan Cad., Serdivan / Sakarya', district='Serdivan', city='Sakarya', hours_note='* Saatler temsilîdir; güncel bilgi için lütfen arayın.', hours='[{"label":"Kahvaltı","value":"08:00 – 12:00"},{"label":"Öğle & Akşam","value":"12:00 – 24:00"},{"label":"Döner Ocağı","value":"11:00 – 23:00"},{"label":"Açık","value":"Her gün"}]'::jsonb, maps_link='https://maps.app.goo.gl/54tAHoyYY8VGCL4G7', lat=40.796183, lng=30.276327, site_url='https://www.leventet.com.tr' where id=1;
