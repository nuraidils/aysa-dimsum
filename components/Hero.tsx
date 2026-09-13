"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import { waLink, MAPS_LINK } from "@/lib/menu-data";
import WaveDivider from "./WaveDivider";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-0 overflow-hidden bg-brand-cream">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-display font-semibold text-brand-red mb-4">
            Dimsum rumahan asal Balaraja
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-ink-900">
            Kukus hangat, saus mengalir,
            <br className="hidden sm:block" /> satu gigitan langsung nagih.
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-md">
            Dari original klasik sampai kuah keju creamy yang meleleh — semua dimsum Aysa
            dibuat fresh setiap hari dan siap dianter ke depan pintu kamu.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={waLink("Halo Aysa Dimsum, aku mau pesan ya!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-maroon px-4 sm:px-7 py-3.5 sm:py-4 min-h-[44px] font-semibold text-sm sm:text-base text-brand-cream shadow-glow transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle size={20} />
              Pesan via WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-maroon/30 px-4 sm:px-6 py-3.5 sm:py-4 min-h-[44px] font-semibold text-sm sm:text-base text-brand-maroon transition-colors hover:bg-brand-maroon/5 w-full sm:w-auto"
            >
              <MapPin size={20} />
              Lihat Lokasi
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-ink-600">
            <div>
              <p className="font-display font-bold text-2xl text-brand-maroon">8</p>
              <p>Varian dimsum</p>
            </div>
            <div className="h-8 w-px bg-brand-maroon/15" />
            <div>
              <p className="font-display font-bold text-2xl text-brand-maroon">Fresh</p>
              <p>Dimasak harian</p>
            </div>
            <div className="h-8 w-px bg-brand-maroon/15" />
            <div>
              <p className="font-display font-bold text-2xl text-brand-maroon">Balaraja</p>
              <p>Griya Sutera</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
              <span className="block w-3 h-10 rounded-full bg-white/70 blur-sm animate-steam" style={{ animationDelay: "0s" }} />
              <span className="block w-3 h-14 rounded-full bg-white/70 blur-sm animate-steam" style={{ animationDelay: "0.6s" }} />
              <span className="block w-3 h-10 rounded-full bg-white/70 blur-sm animate-steam" style={{ animationDelay: "1.2s" }} />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/20 to-brand-maroon/10 blur-2xl scale-90" />
            <Image
              src="/logo-hero.webp"
              alt="Logo Aysa Dimsum"
              fill
              sizes="(min-width: 640px) 320px, 256px"
              className="relative drop-shadow-xl object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>

      <WaveDivider fill="#FFFFFF" className="mt-16 sm:mt-24" />
    </section>
  );
}