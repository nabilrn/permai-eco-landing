const PhotoGallery = () => {
  const images = [
    {
      url: "/images/griyaluhu.png",
      alt: "Kegiatan Bank Sampah Pondok Permai di Griya Luhu",
      title: "Program Griya Luhu",
      size: "large",
    },
    {
      url: "/images/kkn.png",
      alt: "Kegiatan KKN Mahasiswa dalam Program Bank Sampah",
      title: "Program KKN",
      size: "medium",
    },
    {
      url: "/images/goro.png",
      alt: "Gotong Royong Bersama Bank Sampah Pondok Permai",
      title: "Gotong Royong",
      size: "medium",
    },
    {
      url: "/images/pemilahan.png",
      alt: "Proses Pemilahan Sampah Organik dan Anorganik",
      title: "Pemilahan Sampah",
      size: "small",
    },
    {
      url: "/images/penimbangan.png",
      alt: "Penimbangan Sampah di Bank Sampah Pondok Permai",
      title: "Penimbangan Sampah",
      size: "small",
    },
    {
      url: "/images/penjualan.png",
      alt: "Penjualan Hasil Olahan Sampah - Ekonomi Sirkular",
      title: "Penjualan Hasil",
      size: "wide",
    },
    {
      url: "/images/walikota.png",
      alt: "Kunjungan Walikota Padang ke Bank Sampah Pondok Permai",
      title: "Kunjungan Walikota",
      size: "small",
    },
  ];

  return (
    <section id="gallery" className="relative py-20 md:py-28 overflow-hidden topo-pattern">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="mb-14 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-forest mb-3">
            Galeri Kegiatan
          </h2>
          <p className="text-muted-text max-w-xl">
            Dokumentasi berbagai kegiatan dan program pengelolaan sampah yang
            telah dilaksanakan oleh Bank Sampah Pondok Permai.
          </p>
        </div>

        {/* Asymmetric masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[160px] md:auto-rows-[200px] gap-2 md:gap-3 animate-on-scroll">
          {images.map((image, index) => {
            const spanClass =
              image.size === "large"
                ? "col-span-2 row-span-2"
                : image.size === "wide"
                ? "col-span-2"
                : "";

            return (
              <div
                key={index}
                className={`stagger-child group relative overflow-hidden rounded-md ${spanClass}`}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  title={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] photo-graded"
                  loading="lazy"
                  decoding="async"
                />
                {/* Hover overlay with caption - show on touch devices */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 sm:group-hover:opacity-100 opacity-100 sm:opacity-0 transition-opacity duration-300 flex items-end">
                  <span className="text-white text-xs sm:text-sm font-medium px-3 sm:px-4 pb-3 sm:pb-4">
                    {image.title}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-10 text-right animate-on-scroll">
          <a
            href="https://www.instagram.com/bank_sampahpp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-forest-green hover:text-living-green transition-colors"
          >
            Lihat Semua Dokumentasi &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
