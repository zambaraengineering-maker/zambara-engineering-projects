import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ProductsSection from "../components/ProductsSection";
import AcademySection from "../components/AcademySection";
import SoftwareSection from "../components/SoftwareSection";
import ContactsSection from "../components/ContactsSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AcademySection />
      <SoftwareSection />
      <ContactsSection />
      <Footer />
    </div>
  );
}