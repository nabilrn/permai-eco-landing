import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisitorCounter from "@/components/VisitorCounter";
import PhotoGallery from "@/components/PhotoGallery";
import OrganizationStructure from "@/components/OrganizationStructure";
import KnowledgeSection from "@/components/KnowledgeSection";
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
      <VisitorCounter />
      <PhotoGallery />
      <OrganizationStructure />
      <KnowledgeSection />
      <BlogSection />
      <LocationMap />
      <PartnershipSection />
      <Footer />
    </div>
  );
};

export default Index;
