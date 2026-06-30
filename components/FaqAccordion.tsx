"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/data";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-[860px] mx-auto mt-10">
      {FAQ.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-ink/10">
            <button onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-5 py-6 text-left font-serif text-xl md:text-2xl text-ink hover:text-terradeep transition">
              <span>{f.q}</span>
              <span className={`shrink-0 w-7 h-7 rounded-full grid place-items-center ring-1 ring-ink/10 transition-all ${isOpen ? "rotate-45 bg-terra text-white ring-0" : "text-terradeep"}`}>
                <Plus className="w-4 h-4" />
              </span>
            </button>
            <div className="overflow-hidden transition-all duration-500" style={{ maxHeight: isOpen ? 240 : 0 }}>
              <p className="pb-6 text-pale max-w-[66ch]">{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
