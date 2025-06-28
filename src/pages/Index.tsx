
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import PartnershipSection from '@/components/PartnershipSection';
import OrganizationStructure from '@/components/OrganizationStructure';
import Footer from '@/components/Footer';
import ScrollAnimations from '@/components/ScrollAnimations';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <Header />
      <HeroSection />
      <PhotoGallery />
      <LocationMap />
      <PartnershipSection />
      <OrganizationStructure />
      <Footer />
    </div>
  );
};

export default Index;
