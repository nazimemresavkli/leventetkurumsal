"use client";
import { useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import "leaflet/dist/leaflet.css";
import { RESTAURANT } from "@/lib/data";

export default function MapView({ className = "" }: { className?: string }) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    let disposed = false;
    (async () => {
      const mod = await import("leaflet");
      const L: any = (mod as any).default ?? mod;
      if (disposed || !elRef.current || mapRef.current) return;

      const { lat, lng } = RESTAURANT.coords;
      const map = L.map(elRef.current, {
        center: [lat, lng],
        zoom: 16,
        scrollWheelZoom: false,   // sayfa kaydırmasını ele geçirmesin
        zoomControl: true,
        attributionControl: true,
      });
      mapRef.current = map;

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        {
          subdomains: "abcd",
          maxZoom: 20,
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      ).addTo(map);

      // kırmızı pin yerine BÜYÜK logo işaretçisi
      const icon = L.divIcon({
        className: "lvt-marker",
        html:
          '<div class="lvt-pin">' +
          '<div class="lvt-pin-card"><img src="/logo.svg" alt="Levent Et" /></div>' +
          "</div>",
        iconSize: [168, 92],
        iconAnchor: [84, 92],
      });
      L.marker([lat, lng], { icon, keyboard: false, title: "Levent Et" })
        .addTo(map)
        .on("click", () => window.open(RESTAURANT.mapsLink, "_blank"));

      setTimeout(() => map.invalidateSize(), 60);
    })();

    return () => {
      disposed = true;
      const m = mapRef.current as { remove?: () => void } | null;
      if (m && typeof m.remove === "function") m.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className={`lvt-map-frame ${className}`}>
      <div ref={elRef} className="lvt-map" />
      <span className="lvt-map-cap">
        <MapPin className="w-3.5 h-3.5 text-terra" />
        Serdivan / Sakarya
      </span>
    </div>
  );
}
