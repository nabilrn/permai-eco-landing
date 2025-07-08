import { Camera } from "lucide-react";

const PhotoGallery = () => {
  const images = [
    {
      url: "/images/griyaluhu.png",
      alt: "Kegiatan Bank Sampah Pondok Permai di Griya Luhu - Program Pengelolaan Sampah Komunitas",
      title: "Program Griya Luhu",
    },
    {
      url: "/images/kkn.png",
      alt: "Kegiatan KKN Mahasiswa dalam Program Bank Sampah Pondok Permai - Edukasi Lingkungan",
      title: "Program KKN",
    },
    {
      url: "/images/goro.png",
      alt: "Kegiatan Gotong Royong Bersama Bank Sampah Pondok Permai - Aksi Bersih Lingkungan",
      title: "Gotong Royong",
    },
    {
      url: "/images/pemilahan.png",
      alt: "Proses Pemilahan Sampah di Bank Sampah Pondok Permai - Sortir Sampah Organik dan Anorganik",
      title: "Pemilahan Sampah",
    },
    {
      url: "/images/penimbangan.png",
      alt: "Penimbangan Sampah di Bank Sampah Pondok Permai - Sistem Pencatatan Sampah Terpadu",
      title: "Penimbangan Sampah",
    },
    {
      url: "/images/penjualan.png",
      alt: "Penjualan Hasil Olahan Sampah Bank Sampah Pondok Permai - Ekonomi Sirkular",
      title: "Penjualan Hasil",
    },
    {
      url: "/images/walikota.png",
      alt: "Kunjungan Walikota Padang ke Bank Sampah Pondok Permai - Dukungan Pemerintah Daerah",
      title: "Kunjungan Walikota",
    },
    {
      url: "/images/map.png",
      alt: "Peta Lokasi Bank Sampah Pondok Permai Padang - Limau Manis Pauh Sumatera Barat",
      title: "Peta Lokasi",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Galeri Kegiatan Bank Sampah Pondok Permai
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi berbagai kegiatan dan program pengelolaan sampah yang
            telah dilaksanakan oleh Bank Sampah Pondok Permai di Padang,
            Sumatera Barat
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square">
                  <img
                    src={image.url}
                    alt={image.alt}
                    title={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
