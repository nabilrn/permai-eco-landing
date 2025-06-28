import { Camera } from "lucide-react";

const PhotoGallery = () => {
  const images = [
    {
      url: "public/images/griyaluhu.png",
    },
    {
      url: "public/images/kkn.png",
    },
    {
      url: "public/images/goro.png",
    },
    {
      url: "public/images/pemilahan.png",
    },
    {
      url: "public/images/penimbangan.png",
    },
    {
      url: "public/images/penjualan.png",
    },
    {
      url: "public/images/walikota.png",
    },
    {
      url: "public/images/map.png",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Galeri Kegiatan
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi berbagai kegiatan dan program yang telah dilaksanakan
            oleh Bank Sampah Pondok Permai
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
                    alt={`Kegiatan Bank Sampah ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
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
