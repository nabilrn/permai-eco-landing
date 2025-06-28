import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#gallery");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Bank Sampah
              <span className="block text-green-600">Pondok Permai</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bersama Wujudkan Lingkungan Bersih dan Berkelanjutan
            </p>
            <p className="text-gray-500 mb-8">
              Bergabunglah dengan komunitas peduli lingkungan untuk menciptakan
              masa depan yang lebih hijau dan sustainable melalui pengelolaan
              sampah yang bertanggung jawab.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 transform hover:scale-105 transition-all duration-200"
              >
                Bergabung Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div className="animate-slide-in-left">
            <div className="relative">
              <img
                src="public/images/banksampahpp.png"
                alt="Lingkungan Hijau Bank Sampah"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover parallax-scroll"
              />
              <div className="absolute inset-0 bg-green-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNextSection}
        >
          <ArrowDown className="w-6 h-6 text-green-600 hover:text-green-700 transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
