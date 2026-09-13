import { Star } from "lucide-react";
import Reveal from "./Reveal";
import WaveDivider from "./WaveDivider";

const testimonials = [
  {
    name: "Mba Rina",
    area: "Balaraja",
    quote:
      "Langganan Dimsum Kuah Keju Creamy tiap minggu buat anak-anak, kejunya kental banget dan bonus chili oilnya selalu abis duluan.",
  },
  {
    name: "Pak Dedi",
    area: "Griya Sutera",
    quote:
      "Dimsum Bakarnya cocok buat nemenin ngopi sore. Manis gurihnya pas, gak eneg walau habis banyak tusuk.",
  },
  {
    name: "Kak Fira",
    area: "Talagasari",
    quote:
      "Mentainya juara, toppingnya banyak dan gak pelit. Order lewat WA juga responnya cepet, sekali chat langsung diproses.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="relative bg-white pb-0 pt-24 sm:pt-32">
      <div className="container-px mx-auto pb-24 sm:pb-32">
        <Reveal className="max-w-2xl">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink-900">
            Kata mereka yang sudah coba
          </h2>
          <p className="mt-4 text-ink-600">
            Cerita dari pelanggan sekitar Balaraja yang sudah langganan Aysa Dimsum.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <Reveal key={t.name} delay={idx * 0.12}>
              <figure className="h-full rounded-2xl bg-brand-cream p-6 shadow-card flex flex-col justify-between">
                <div className="flex gap-1 text-brand-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-ink-900 text-[15px] leading-relaxed">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 text-sm text-ink-600">
                  <span className="font-semibold text-brand-maroon">{t.name}</span> · {t.area}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <WaveDivider fill="#7A0C0C" className="mt-20 sm:mt-28" />
    </section>
  );
}
