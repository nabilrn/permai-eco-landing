
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Kegiatan pemilahan sampah bersama masyarakat"
    },
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Workshop edukasi lingkungan untuk anak-anak"
    },
    {
      url: "https://images.unsplash.com/photo-1487252665478-49b61b47f302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Program penanaman pohon di area komunitas"
    },
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      caption: "Hasil daur ulang sampah menjadi kerajinan"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Galeri Kegiatan</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dokumentasi berbagai kegiatan dan program yang telah dilaksanakan oleh Bank Sampah Pondok Permai
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto animate-on-scroll">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src={images[currentImage].url}
              alt={images[currentImage].caption}
              className="w-full h-[500px] object-cover transition-all duration-500 transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white text-lg font-medium">{images[currentImage].caption}</p>
            </div>
          </div>

          <Button
            onClick={prevImage}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 hover:scale-110 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            onClick={nextImage}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white border-white/20 hover:scale-110 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          <div className="flex justify-center mt-6 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                  currentImage === index ? 'bg-green-600 scale-110' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
