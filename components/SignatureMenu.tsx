"use client";

import Image from "next/image";
import { Flame } from "lucide-react";
import { menuItems, signatureSlugs, formatRupiah, waLink } from "@/lib/menu-data";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const badges: Record<string, string> = {
  original: "Paling Diburu",
  mentai: "Favorit Baru",
  "kuah-keju-creamy": "Chili Oil Gratis",
};

export default function SignatureMenu() {
  const featured = signatureSlugs
    .map((slug) => menuItems.find((item) => item.slug === slug))
    .filter(Boolean);

  return (
    <section id="menu-andalan" className="relative bg-white">
      <div className="container-px mx-auto pt-4 sm:pt-8 pb-16 sm:pb-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink-900">
            Tiga menu yang bikin pelanggan balik lagi
          </h2>
          <p className="mt-4 text-ink-600">
            Kalau baru pertama coba Aysa Dimsum, mulai dari sini — tiga rasa yang paling sering
            dipesan ulang.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {featured.map((item, idx) => {
            if (!item) return null;
            const midPack = item.packs[1] ?? item.packs[0];
            return (
              <Reveal key={item.slug} delay={idx * 0.12}>
                <article className="group relative rounded-3xl bg-brand-cream border border-transparent shadow-card transition-all duration-300 hover:border-brand-gold hover:shadow-card-hover overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-brand-cream" />
                    )}
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-brand-maroon px-3 py-1 text-xs font-semibold text-brand-gold">
                      <Flame size={13} />
                      {badges[item.slug]}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-bold text-xl text-center text-ink-900">
                      {item.name}
                    </h3>
                    {item.note && (
                      <p className="mt-1 text-center text-sm text-brand-red font-medium">
                        {item.note}
                      </p>
                    )}

                    <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
                      {item.packs.map((pack) => (
                        <span
                          key={pack.label}
                          className="rounded-full bg-brand-maroon px-3 py-1 text-xs font-semibold text-white"
                        >
                          {pack.label} · {formatRupiah(pack.price)}
                        </span>
                      ))}
                    </div>

                    <a
                      href={waLink(
                        `Halo Aysa Dimsum, aku mau pesan ${item.name} (${midPack.label} - ${formatRupiah(
                          midPack.price
                        )})`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-gold px-5 py-3 min-h-[44px] font-semibold text-brand-maroon transition-transform duration-300 hover:scale-105"
                    >
                      Pesan {item.name.replace("Dimsum ", "")}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      <WaveDivider fill="#7A0C0C" />
    </section>
  );
}
