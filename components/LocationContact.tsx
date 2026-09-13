import { MapPin, Clock, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, MAPS_LINK, WA_DISPLAY, waLink } from "@/lib/menu-data";
import Reveal from "./Reveal";

export default function LocationContact() {
  return (
    <section id="lokasi" className="relative bg-brand-maroon text-brand-cream pt-12 sm:pt-16 pb-16 sm:pb-20">
      <div className="container-px mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl">
            Datang langsung atau tinggal chat
          </h2>
          <p className="mt-4 text-brand-cream/75 max-w-md">
            Ambil sendiri di Balaraja atau pesan lewat WhatsApp — kami siapin dan kabari begitu
            pesananmu matang.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex gap-4">
              <MapPin className="shrink-0 text-brand-gold" size={22} />
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-brand-cream/75 text-sm">{ADDRESS}</p>
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-gold text-sm font-semibold underline underline-offset-4"
                >
                  Buka di Google Maps
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Clock className="shrink-0 text-brand-gold" size={22} />
              <div>
                <p className="font-semibold">Jam Buka</p>
                <p className="text-brand-cream/75 text-sm">Setiap hari, 08.00 – 23.00 WIB</p>
              </div>
            </li>
            <li className="flex gap-4">
              <Phone className="shrink-0 text-brand-gold" size={22} />
              <div>
                <p className="font-semibold">Kontak</p>
                <p className="text-brand-cream/75 text-sm">{WA_DISPLAY}</p>
              </div>
            </li>
          </ul>

          <a
            href={waLink("Halo Aysa Dimsum, aku mau pesan ya!")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gold px-7 py-4 min-h-[44px] font-semibold text-brand-maroon transition-transform duration-300 hover:scale-105"
          >
            <MessageCircle size={20} />
            Chat & Pesan Sekarang
          </a>
        </Reveal>

        <Reveal delay={0.15} className="rounded-3xl overflow-hidden shadow-card-hover border border-white/10 aspect-[4/3] w-full">
          <iframe
            title="Lokasi Aysa Dimsum"
            src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`}
            className="w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Reveal>
      </div>
    </section>
  );
}
