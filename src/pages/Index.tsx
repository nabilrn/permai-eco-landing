import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PhotoGallery from "@/components/PhotoGallery";
import OrganizationStructure from "@/components/OrganizationStructure";
import BlogSection from "@/components/BlogSection";
import LocationMap from "@/components/LocationMap";
import PartnershipSection from "@/components/PartnershipSection";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <HeroSection />
      <PhotoGallery />
      <OrganizationStructure />
      <BlogSection />
      <LocationMap />
      <PartnershipSection />
      <Footer />
    </div>
  );
};

export default Index;
