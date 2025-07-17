import { useEffect } from "react";
import LoadingScreen from "@/components/loading-screen";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingParticles from "@/components/floating-particles";
import FloatingContact from "@/components/floating-contact";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Home() {
  useScrollAnimation();

  return (
    <div className="font-poppins bg-deep-black text-white">
      <LoadingScreen />
      <FloatingParticles />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <FloatingContact />
    </div>
  );
}
