"use client";

import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/menu-data";

export default function WhatsAppFloating() {
  return (
    <a
      href={waLink("Halo Aysa Dimsum, aku mau pesan ya!")}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-maroon text-brand-cream shadow-glow"
      aria-label="Pesan via WhatsApp"
    >
      <MessageCircle size={26} />
    </a>
  );
}
