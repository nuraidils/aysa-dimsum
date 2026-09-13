"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const shots: Array<{ src: string; caption: string }> = [
  { src: "/images/dimsum-original.jpg", caption: "Original, dikukus tiap pagi" },
  { src: "/images/dimsum-goreng.jpg", caption: "Goreng renyah, saus melimpah" },
  { src: "/images/dimsum-kuah-keju-creamy.jpg", caption: "Kuah keju yang meleleh" },
  { src: "/images/dimsum-mentai.jpg", caption: "Mentai topping melimpah" },
  { src: "/images/dimsum-tartar.jpg", caption: "Tartar, gurih dari suapan pertama" },
  { src: "/images/dimsum-mentai-ulangtahun.jpg", caption: "Siap pesan untuk acara spesial" },
];

export default function Gallery() {
  return (
    <section id="galeri" className="relative bg-brand-cream">
      <div className="container-px mx-auto pt-4 sm:pt-8 pb-16 sm:pb-20">
        <Reveal className="max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink-900">
            Tekstur dan warnanya, kelihatan dari sini
          </h2>
          <p className="mt-4 text-ink-600">
            Jajaran foto asli dapur Aysa — dari kukusan pagi sampai yang siap dianter.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {shots.map((shot, i) => (
            <Reveal key={shot.src} delay={(i % 3) * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-brand-maroon/10 aspect-square">
                <Image
                  src={shot.src}
                  alt={shot.caption}
                  fill
                  sizes="(min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <p className="absolute bottom-0 inset-x-0 bg-brand-maroon/85 text-brand-cream text-xs sm:text-sm text-center py-2 px-2">
                  {shot.caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider fill="#FFFFFF" />
    </section>
  );
}