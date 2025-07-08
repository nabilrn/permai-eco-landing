// Local Business Schema for Bank Sampah Pondok Permai
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Bank Sampah Pondok Permai",
  alternateName: "BSPP",
  description:
    "Bank Sampah Pondok Permai adalah organisasi pengelolaan sampah terpadu yang berkomitmen untuk menciptakan lingkungan bersih dan berkelanjutan di Padang, Sumatera Barat.",
  url: "https://banksampah.pondokpermai.my.id",
  logo: "https://banksampah.pondokpermai.my.id/images/logopondokpermai.png",
  image: [
    "https://banksampah.pondokpermai.my.id/images/banksampahpp.png",
    "https://banksampah.pondokpermai.my.id/images/pemilahan.png",
    "https://banksampah.pondokpermai.my.id/images/penimbangan.png",
    "https://banksampah.pondokpermai.my.id/images/penjualan.png",
  ],
  telephone: "+62-812-6707-8480",
  email: "bpondokpermai@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "RT.01/RW.03, Limau Manis Sel.",
    addressLocality: "Pauh",
    addressRegion: "Sumatera Barat",
    postalCode: "25163",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -0.947,
    longitude: 100.414,
  },
  openingHours: ["Mo-Sa 08:00-17:00"],
  priceRange: "Gratis",
  currenciesAccepted: "IDR",
  paymentAccepted: "Cash, Bank Transfer",
  areaServed: {
    "@type": "Place",
    name: "Padang, Sumatera Barat, Indonesia",
  },
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: -0.947,
      longitude: 100.414,
    },
    geoRadius: "20000",
  },
  knowsAbout: [
    "Pengelolaan Sampah",
    "Daur Ulang",
    "Lingkungan Hidup",
    "Sampah Organik",
    "Sampah Anorganik",
    "Edukasi Lingkungan",
    "Sustainability",
    "Waste Management",
    "Environmental Education",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Bank Sampah Pondok Permai",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pengumpulan Sampah",
          description: "Layanan pengumpulan sampah rumah tangga dan komersial",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pemilahan Sampah",
          description:
            "Pemilahan sampah organik dan anorganik yang profesional",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Edukasi Lingkungan",
          description:
            "Program edukasi dan sosialisasi tentang pengelolaan sampah",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Daur Ulang",
          description:
            "Proses daur ulang sampah menjadi produk bernilai ekonomi",
        },
      },
    ],
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+62-812-6707-8480",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
      areaServed: "ID",
    },
    {
      "@type": "ContactPoint",
      email: "bpondokpermai@gmail.com",
      contactType: "customer service",
      availableLanguage: ["Indonesian"],
      areaServed: "ID",
    },
  ],
  sameAs: [
    "https://www.instagram.com/bank_sampahpp",
    "https://wa.me/6281267078480",
  ],
  founder: {
    "@type": "Person",
    name: "Pengurus Bank Sampah Pondok Permai",
  },
  foundingDate: "2020",
  numberOfEmployees: "5-10",
  slogan: "Bersama Wujudkan Lingkungan Bersih dan Berkelanjutan",
  award: [
    "Recognition from Padang City Government",
    "Community Environmental Award",
  ],
};

// Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Layanan Pengelolaan Sampah Terpadu",
  description:
    "Layanan lengkap pengelolaan sampah yang meliputi pengumpulan, pemilahan, daur ulang, dan edukasi lingkungan",
  provider: {
    "@type": "Organization",
    name: "Bank Sampah Pondok Permai",
    url: "https://banksampah.pondokpermai.my.id",
  },
  areaServed: {
    "@type": "Place",
    name: "Padang, Sumatera Barat, Indonesia",
  },
  serviceType: "Environmental Services",
  category: "Waste Management",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Bank Sampah",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pengumpulan Sampah Rumah Tangga",
          description: "Layanan pengumpulan sampah rumah tangga terjadwal",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pemilahan dan Sortir Sampah",
          description:
            "Pemilahan sampah organik dan anorganik secara profesional",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Program Edukasi Lingkungan",
          description:
            "Sosialisasi dan edukasi tentang pengelolaan sampah berkelanjutan",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Daur Ulang Sampah",
          description:
            "Proses daur ulang sampah menjadi produk bernilai ekonomi",
        },
      },
    ],
  },
};

// FAQ Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apa itu Bank Sampah Pondok Permai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bank Sampah Pondok Permai adalah organisasi pengelolaan sampah terpadu yang berkomitmen untuk menciptakan lingkungan bersih dan berkelanjutan di Padang, Sumatera Barat. Kami menyediakan layanan pengumpulan, pemilahan, daur ulang sampah, dan edukasi lingkungan.",
      },
    },
    {
      "@type": "Question",
      name: "Bagaimana cara bergabung dengan Bank Sampah Pondok Permai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Anda dapat bergabung dengan menghubungi kami melalui WhatsApp di +62-812-6707-8480 atau email bpondokpermai@gmail.com. Tim kami akan membantu Anda memulai program pengelolaan sampah di rumah atau komunitas Anda.",
      },
    },
    {
      "@type": "Question",
      name: "Dimana lokasi Bank Sampah Pondok Permai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bank Sampah Pondok Permai berlokasi di RT.01/RW.03, Limau Manis Sel., Pauh, Padang, Sumatera Barat 25163. Kami melayani area Padang dan sekitarnya.",
      },
    },
    {
      "@type": "Question",
      name: "Jenis sampah apa yang diterima Bank Sampah Pondok Permai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami menerima berbagai jenis sampah termasuk sampah organik (sisa makanan, daun, ranting) dan sampah anorganik (plastik, kertas, logam, kaca). Sampah akan dipilah dan diproses sesuai dengan jenisnya untuk didaur ulang.",
      },
    },
    {
      "@type": "Question",
      name: "Apa manfaat bergabung dengan Bank Sampah Pondok Permai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Manfaat bergabung antara lain: mengurangi volume sampah rumah tangga, mendapatkan edukasi pengelolaan sampah yang baik, berkontribusi pada lingkungan yang lebih bersih, dan berpartisipasi dalam program berkelanjutan untuk generasi mendatang.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada biaya untuk menggunakan layanan Bank Sampah Pondok Permai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Layanan dasar Bank Sampah Pondok Permai tersedia gratis untuk masyarakat. Kami berkomitmen untuk memberikan pelayanan terbaik dalam pengelolaan sampah tanpa memberatkan masyarakat.",
      },
    },
  ],
};

// Breadcrumb Schema
export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Beranda",
      item: "https://banksampah.pondokpermai.my.id",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Layanan",
      item: "https://banksampah.pondokpermai.my.id#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Galeri",
      item: "https://banksampah.pondokpermai.my.id#gallery",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Kontak",
      item: "https://banksampah.pondokpermai.my.id#contact",
    },
  ],
};

// Event Schema (for future events)
export const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Sosialisasi Pengelolaan Sampah Berkelanjutan",
  description:
    "Acara edukasi dan sosialisasi tentang pengelolaan sampah yang berkelanjutan bersama Bank Sampah Pondok Permai",
  startDate: "2025-08-01T09:00:00+07:00",
  endDate: "2025-08-01T16:00:00+07:00",
  location: {
    "@type": "Place",
    name: "Bank Sampah Pondok Permai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "RT.01/RW.03, Limau Manis Sel.",
      addressLocality: "Pauh",
      addressRegion: "Sumatera Barat",
      postalCode: "25163",
      addressCountry: "ID",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Bank Sampah Pondok Permai",
    url: "https://banksampah.pondokpermai.my.id",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    availability: "https://schema.org/InStock",
  },
};
