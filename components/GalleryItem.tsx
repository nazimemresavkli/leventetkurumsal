"use client";
import PhotoOverlay from "@/components/PhotoOverlay";
import { useLightbox } from "@/components/Lightbox";

type Shape = "arch" | "circle" | "round";
const radius: Record<Shape, string> = {
  arch: "arch",
  circle: "rounded-full",
  round: "rounded-2xl",
};

export default function GalleryItem({
  src, alt, shape = "round", className = "",
}: { src: string; alt: string; shape?: Shape; className?: string }) {
  const { open } = useLightbox();
  return (
    <div
      onClick={() => open(src, alt)}
      role="button"
      aria-label={`${alt} — büyüt`}
      className={`group relative overflow-hidden img-frame cursor-magnify ${radius[shape]} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105" />
      <PhotoOverlay logoHeight={40} />
    </div>
  );
}
