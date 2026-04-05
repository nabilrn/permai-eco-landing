import { ChevronDown } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToNextSection = () => {
    const nextSection = document.getElementById("visitor-stats");
    if (nextSection) {
      const headerHeight = 80;
      const elementPosition = nextSection.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-end overflow-hidden"
    >
      {/* Background Image with subtle parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat photo-graded parallax-bg"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=85')",
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />

      {/* Cinematic dark gradient overlay - darker at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,23,20,0.3) 0%, rgba(15,23,20,0.5) 40%, rgba(15,23,20,0.75) 70%, rgba(15,23,20,0.92) 100%)",
        }}
      />

      {/* Content - anchored at bottom-left */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-48 w-full">
        <div className="max-w-2xl">
          {/* Small caps label */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6 border border-white/20">
              <p className="text-base sm:text-lg md:text-xl font-bold tracking-wide text-white">
                Bank Sampah Pondok Permai
              </p>
            </div>
          </div>

          {/* Large serif headline */}
          <h1
            className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] text-white mb-6 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)" }}
          >
            Wujudkan Lingkungan
            <br />
            Bersih Bersama
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg text-white/75 max-w-[480px] leading-relaxed mb-10 transition-all duration-700 delay-[0.4s] ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Bersama wujudkan lingkungan bersih dan berkelanjutan melalui
            pengelolaan sampah yang bertanggung jawab di Padang, Sumatera Barat.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#blog"
              className="inline-flex items-center justify-center bg-forest-green hover:brightness-90 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 text-base"
            >
              Bergabung Sekarang
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white hover:text-deep-forest transition-all duration-300 text-base"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={scrollToNextSection}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs tracking-wider uppercase font-medium">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 text-white/60 animate-scroll-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
