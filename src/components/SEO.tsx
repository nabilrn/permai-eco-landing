import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Bank Sampah Pondok Permai Padang - Pengelolaan Sampah Terpadu",
  description = "Solusi pengelolaan sampah terpadu untuk lingkungan bersih dan berkelanjutan di Padang. Layanan pengumpulan, pemilahan sampah, dan edukasi lingkungan.",
  image = "https://pondokpermai.my.id/images/banksampahpp.png",
  url = "https://pondokpermai.my.id",
  type = "website",
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", url);
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", type);
    }

    // Update Twitter Card meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute("content", image);
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", url);
    }

    // Add/update schema.org structured data for the current page
    const existingSchema = document.querySelector("#dynamic-schema");
    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");
    schema.id = "dynamic-schema";
    schema.type = "application/ld+json";
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description: description,
      image: image,
      url: url,
      mainEntity: {
        "@type": "Organization",
        name: "Bank Sampah Pondok Permai",
        url: "https://pondokpermai.my.id",
        logo: "https://pondokpermai.my.id/images/logopondokpermai.png",
        description:
          "Bank Sampah Pondok Permai adalah organisasi pengelolaan sampah terpadu di Padang",
        address: {
          "@type": "PostalAddress",
          streetAddress: "RT.01/RW.03, Limau Manis Sel.",
          addressLocality: "Pauh",
          addressRegion: "Sumatera Barat",
          addressCountry: "ID",
          postalCode: "25163",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+62-812-6707-8480",
          contactType: "customer service",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -0.947,
          longitude: 100.414,
        },
      },
    });

    document.head.appendChild(schema);
  }, [title, description, image, url, type]);

  return null;
};

export default SEO;
