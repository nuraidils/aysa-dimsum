import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureMenu from "@/components/SignatureMenu";
import MenuCatalog from "@/components/MenuCatalog";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import LocationContact from "@/components/LocationContact";
import Footer from "@/components/Footer";
import WhatsAppFloating from "@/components/WhatsAppFloating";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SignatureMenu />
      <MenuCatalog />
      <Gallery />
      <Testimonials />
      <LocationContact />
      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
