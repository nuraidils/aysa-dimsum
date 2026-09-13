"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { waLink } from "@/lib/menu-data";

const navLinks = [
  { href: "#menu-andalan", label: "Menu Andalan" },
  { href: "#menu-lengkap", label: "Menu Lengkap" },
  { href: "#galeri", label: "Galeri" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#lokasi", label: "Lokasi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setOpen(false);
    const targetId = href.replace("#", "");
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-brand-cream/95 backdrop-blur shadow-[0_2px_16px_rgba(122,12,12,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 sm:h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Logo Aysa Dimsum"
            width={44}
            height={44}
            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover"
            priority
          />
          <span className="font-display font-extrabold text-xl sm:text-2xl">
            <span className="text-brand-maroon">Aysa</span>{" "}
            <span className="text-brand-gold">Dimsum</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-ink-900/80 hover:text-brand-maroon transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Halo Aysa Dimsum, aku mau pesan ya!")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-brand-maroon px-5 py-2.5 min-h-[44px] font-semibold text-brand-cream shadow-glow transition-transform duration-300 hover:scale-105"
        >
          Pesan Sekarang
        </a>

        <button
          type="button"
          onClick={() => setOpen((v: boolean) => !v)}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-maroon"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-brand-cream border-t border-brand-maroon/10 shadow-lg"
          >
            <nav className="container-px mx-auto flex flex-col py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleMobileNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="py-3 font-medium text-ink-900/80 min-h-[44px] flex items-center"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={waLink("Halo Aysa Dimsum, aku mau pesan ya!")}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand-maroon px-5 py-3 min-h-[44px] font-semibold text-brand-cream"
              >
                Pesan Sekarang
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}