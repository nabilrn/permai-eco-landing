
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const KnowledgeSection = () => {
  const knowledgeItems = [
    {
      id: 1,
      title: "Pemilahan Sampah Organik",
      description: "Sampah organik adalah sampah yang berasal dari makhluk hidup seperti sisa makanan, daun, dan ranting. Sampah ini mudah terurai secara alami dan dapat dijadikan kompos untuk menyuburkan tanah. Pemilahan sampah organik sangat penting untuk mengurangi volume sampah yang berakhir di tempat pembuangan akhir.",
      image: "/images/pemilahan.png"
    },
    {
      id: 2,
      title: "Sampah Anorganik dan Daur Ulang",
      description: "Sampah anorganik seperti plastik, kertas, logam, dan kaca dapat didaur ulang menjadi produk baru. Proses daur ulang membantu menghemat sumber daya alam dan mengurangi pencemaran lingkungan. Setiap jenis sampah anorganik memiliki cara pengolahan yang berbeda untuk menghasilkan produk berkualitas.",
      image: "/images/penimbangan.png"
    },
    {
      id: 3,
      title: "Manfaat Bank Sampah",
      description: "Bank sampah memberikan nilai ekonomis pada sampah yang biasanya dibuang begitu saja. Melalui sistem tabungan, masyarakat dapat menukarkan sampah dengan uang atau barang kebutuhan sehari-hari. Ini mendorong partisipasi aktif masyarakat dalam pengelolaan sampah dan menciptakan ekonomi sirkular.",
      image: "/images/penjualan.png"
    },
    {
      id: 4,
      title: "Teknik Penimbangan Sampah",
      description: "Penimbangan sampah dilakukan dengan cermat untuk menentukan nilai tukar yang tepat. Setiap jenis sampah memiliki harga yang berbeda tergantung pada kualitas dan permintaan pasar. Proses ini memerlukan ketelitian dan kejujuran untuk menjaga kepercayaan nasabah bank sampah.",
      image: "/images/goro.png"
    }
  ];

  return (
    <section id="knowledge" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Pengetahuan Pemilahan Sampah
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih dalam tentang teknik pemilahan sampah yang benar dan manfaatnya bagi lingkungan
          </p>
        </div>

        <div className="max-w-6xl mx-auto animate-on-scroll">
          <Carousel className="w-full">
            <CarouselContent>
              {knowledgeItems.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px]">
                      {/* Content - Left Side */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Image - Right Side */}
                      <div className="relative order-1 lg:order-2">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-green-500/10 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
