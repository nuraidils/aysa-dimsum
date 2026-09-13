"use client";

import { useState } from "react";
import { menuItems, formatRupiah, waLink, MenuItem } from "@/lib/menu-data";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const categories: Array<MenuItem["category"] | "Semua"> = [
  "Semua",
  "Kukus",
  "Goreng",
  "Bakar",
  "Signature",
];

export default function MenuCatalog() {
  const [active, setActive] = useState<(typeof categories)[number]>("Semua");

  const filtered =
    active === "Semua" ? menuItems : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu-lengkap" className="relative bg-brand-maroon text-brand-cream">
      <div className="container-px mx-auto pt-4 sm:pt-8 pb-16 sm:pb-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
            Menu lengkap, tinggal pilih paketnya
          </h2>
          <p className="mt-4 text-brand-cream/75">
            Semua varian tersedia dalam beberapa ukuran paket. Pilih kategori, cek harga, langsung
            chat untuk pesan.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2.5 min-h-[44px] font-semibold text-sm transition-colors duration-300 ${
                active === cat
                  ? "bg-brand-gold text-brand-maroon"
                  : "bg-white/10 text-brand-cream hover:bg-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <Reveal key={item.slug} delay={(idx % 3) * 0.1}>
              <div className="rounded-2xl bg-white text-ink-900 p-5 shadow-card h-full">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display font-bold text-lg leading-tight">{item.name}</h3>
                  <span className="shrink-0 rounded-full bg-brand-cream px-2.5 py-1 text-[11px] font-semibold text-brand-red">
                    {item.category}
                  </span>
                </div>
                {item.note && <p className="mt-1 text-xs text-brand-red font-medium">{item.note}</p>}

                <ul className="mt-4 space-y-2">
                  {item.packs.map((pack) => (
                    <li
                      key={pack.label}
                      className="flex items-center justify-between text-sm border-b border-dashed border-ink-900/10 pb-2 last:border-0"
                    >
                      <span className="text-ink-600">{pack.label}</span>
                      <span className="font-semibold text-brand-maroon">
                        {formatRupiah(pack.price)}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={waLink(`Halo Aysa Dimsum, aku mau tanya-tanya soal ${item.name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-brand-maroon px-4 py-2.5 min-h-[44px] text-sm font-semibold text-brand-maroon transition-colors hover:bg-brand-maroon hover:text-white"
                >
                  Tanya & Pesan
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider fill="#FAF8F5" className="mt-20 sm:mt-28" />
    </section>
  );
}