import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("gallery");
    if (nextSection) {
      const headerHeight = 100; // Height of floating header + padding
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white flex items-center relative overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground className="absolute inset-0 z-0" />

      {/* Floating Elements */}
      <FloatingElements />

      {/* Animated Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-lime-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "animate-fade-in-up opacity-100"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="mb-4 inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium animate-pulse-green">
              <Sparkles className="w-4 h-4" />
              Ramah Lingkungan
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Bank Sampah
              <span className="block text-shimmer animate-glow">
                Pondok Permai
              </span>
            </h1>
            <p
              className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Bersama Wujudkan Lingkungan Bersih dan Berkelanjutan
            </p>
            <p
              className="text-gray-500 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Bergabunglah dengan komunitas peduli lingkungan untuk menciptakan
              masa depan yang lebih hijau dan sustainable melalui pengelolaan
              sampah yang bertanggung jawab.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl animate-bounce-soft"
              >
                Bergabung Sekarang
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200 backdrop-blur-sm"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "animate-slide-in-left opacity-100"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse-green"></div>
              <div className="relative">
                <img
                  src="public/images/banksampahpp.png"
                  alt="Lingkungan Hijau Bank Sampah"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover parallax-scroll hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
          onClick={scrollToNextSection}
        >
          <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-200">
            <ArrowDown className="w-6 h-6 text-green-600 group-hover:text-green-700 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
