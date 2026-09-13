import Image from "next/image";
import { WA_DISPLAY, ADDRESS } from "@/lib/menu-data";

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-brand-maroon/10">
      <div className="container-px mx-auto py-12 grid sm:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="Logo Aysa Dimsum"
              width={40}
              height={40}
              className="h-9 w-9 rounded-full object-cover"
            />
            <p className="font-display font-extrabold text-xl">
              <span className="text-brand-maroon">Aysa</span>{" "}
              <span className="text-brand-gold">Dimsum</span>
            </p>
          </div>
          <p className="mt-3 text-sm text-ink-600 max-w-xs">
            Dimsum rumahan dari Balaraja, dibuat fresh setiap hari untuk pelanggan setia kami.
          </p>
        </div>

        <div>
          <p className="font-semibold text-ink-900 mb-3">Jelajahi</p>
          <ul className="space-y-2 text-sm text-ink-600">
            <li><a href="#menu-andalan" className="hover:text-brand-maroon">Menu Andalan</a></li>
            <li><a href="#menu-lengkap" className="hover:text-brand-maroon">Menu Lengkap</a></li>
            <li><a href="#galeri" className="hover:text-brand-maroon">Galeri</a></li>
            <li><a href="#testimoni" className="hover:text-brand-maroon">Testimoni</a></li>
            <li><a href="#lokasi" className="hover:text-brand-maroon">Lokasi</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink-900 mb-3">Kontak</p>
          <p className="text-sm text-ink-600">{WA_DISPLAY}</p>
          <p className="text-sm text-ink-600 mt-1 max-w-xs">{ADDRESS}</p>
        </div>
      </div>

      <div className="border-t border-brand-maroon/10">
        <p className="container-px mx-auto py-5 text-xs text-ink-600 text-center sm:text-left">
          © {new Date().getFullYear()} Aysa Dimsum. Semua hak cipta dilindungi.
        </p>
      </div>
    </footer>
  );
}
