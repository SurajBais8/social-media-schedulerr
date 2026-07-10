import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import TrustedBrands from "../components/landing/TrustedBrands";
import FeaturesSection from "../components/landing/FeaturesSection";
import DashboardShowcase from "../components/landing/DashboardShowcase";
import Testimonials from "../components/landing/Testimonials";
import AIStudioSection from "../components/landing/AIStudioSection";
import FAQ from "../components/landing/FAQ";
import Newsletter from "../components/landing/Newsletter";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";


function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TrustedBrands />
      <FeaturesSection />
      <DashboardShowcase />
      <AIStudioSection />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <ContactSection />
      <Footer />

    </>
  );
}

export default HomePage;