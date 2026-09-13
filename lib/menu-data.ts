export type PackOption = {
  label: string;
  price: number;
};

export type MenuItem = {
  slug: string;
  name: string;
  category: "Kukus" | "Goreng" | "Bakar" | "Signature";
  note?: string;
  image?: string;
  packs: PackOption[];
};

export const WA_NUMBER = "6289504335295";
export const WA_DISPLAY = "+62 895-0433-5295";
export const MAPS_LINK = "https://maps.app.goo.gl/4hhzchMG9qh46T8r7";
export const ADDRESS = "Griya Sutera Balaraja Blok D10 No 17, Kabupaten Balaraja";

export const menuItems: MenuItem[] = [
  {
    slug: "original",
    name: "Dimsum Original",
    category: "Kukus",
    image: "/images/dimsum-original.jpg",
    packs: [
      { label: "3pcs", price: 10000 },
      { label: "5pcs", price: 15000 },
      { label: "7pcs", price: 21000 },
      { label: "10pcs", price: 30000 },
    ],
  },
  {
    slug: "goreng",
    name: "Dimsum Goreng",
    category: "Goreng",
    image: "/images/dimsum-goreng.jpg",
    packs: [
      { label: "3pcs", price: 10000 },
      { label: "5pcs", price: 16000 },
      { label: "7pcs", price: 22000 },
      { label: "10pcs", price: 31000 },
    ],
  },
  {
    slug: "mentai",
    name: "Dimsum Mentai",
    category: "Signature",
    image: "/images/dimsum-mentai.jpg",
    packs: [
      { label: "4pcs", price: 15000 },
      { label: "6pcs", price: 25000 },
      { label: "8pcs", price: 35000 },
      { label: "10pcs", price: 42000 },
    ],
  },
  {
    slug: "tartar",
    name: "Dimsum Tartar",
    category: "Kukus",
    image: "/images/dimsum-tartar.jpg",
    packs: [
      { label: "4pcs", price: 15000 },
      { label: "6pcs", price: 25000 },
      { label: "8pcs", price: 35000 },
      { label: "10pcs", price: 42000 },
    ],
  },
  {
    slug: "chili-oil",
    name: "Dimsum Chili Oil",
    category: "Kukus",
    packs: [
      { label: "4pcs", price: 15000 },
      { label: "6pcs", price: 25000 },
      { label: "8pcs", price: 35000 },
      { label: "10pcs", price: 42000 },
    ],
  },
  {
    slug: "kuah-keju-creamy",
    name: "Dimsum Kuah Keju Creamy",
    category: "Signature",
    note: "Setiap pembelian dapat chili oil gratis",
    image: "/images/dimsum-kuah-keju-creamy.jpg",
    packs: [
      { label: "3pcs", price: 15000 },
      { label: "5pcs", price: 22000 },
      { label: "6pcs", price: 26000 },
      { label: "10pcs", price: 45000 },
    ],
  },
  {
    slug: "bakar",
    name: "Dimsum Bakar",
    category: "Bakar",
    note: "1 tusuk isi 3pcs",
    packs: [
      { label: "1 Tusuk", price: 15000 },
      { label: "3 Tusuk", price: 40000 },
      { label: "5 Tusuk", price: 70000 },
    ],
  },
  {
    slug: "goreng-keju-lumer",
    name: "Dimsum Goreng Keju Lumer",
    category: "Goreng",
    packs: [
      { label: "Original 2pcs", price: 13000 },
      { label: "Chili Oil 2pcs", price: 15000 },
      { label: "Mentai 2pcs", price: 15000 },
    ],
  },
];

export const signatureSlugs = ["original", "mentai", "kuah-keju-creamy"];

export function formatRupiah(value: number): string {
  return `Rp${value.toLocaleString("id-ID")}`;
}

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
