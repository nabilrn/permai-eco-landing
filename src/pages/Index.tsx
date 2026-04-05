import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import VisitorCounter from "@/components/VisitorCounter";
import ScrollAnimations from "@/components/ScrollAnimations";
import SEO from "@/components/SEO";

// Lazy load components that are below the fold
const PhotoGallery = lazy(() => import("@/components/PhotoGallery"));
const OrganizationStructure = lazy(
  () => import("@/components/OrganizationStructure")
);
const KnowledgeSection = lazy(() => import("@/components/KnowledgeSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const LocationMap = lazy(() => import("@/components/LocationMap"));
const PartnershipSection = lazy(
  () => import("@/components/PartnershipSection")
);
const Footer = lazy(() => import("@/components/Footer"));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Bank Sampah Pondok Permai Padang - Pengelolaan Sampah Terpadu untuk Lingkungan Bersih"
        description="Bank Sampah Pondok Permai adalah solusi pengelolaan sampah terpadu di Padang, Sumatera Barat. Layanan pengumpulan, pemilahan, dan daur ulang sampah untuk lingkungan berkelanjutan."
        image="https://pondokpermai.my.id/images/banksampahpp.png"
        url="https://pondokpermai.my.id"
        type="website"
      />
      <ScrollAnimations />
      <Header />
      <HeroSection />
      <VisitorCounter />

      <Suspense fallback={<LoadingSpinner />}>
        <PhotoGallery />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <OrganizationStructure />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <KnowledgeSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <BlogSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <LocationMap />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <PartnershipSection />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
