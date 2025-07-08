import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import PriorityImage from "@/components/ui/PriorityImage";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1); // Remove the '#'
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 100; // Height of floating header + padding
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#gallery", label: "Galeri" },
    { href: "#blog", label: "Tentang Kami" },
    { href: "#location", label: "Lokasi" },
    { href: "#partnership", label: "Mitra" },
    { href: "#organization", label: "Kepengurusan" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
        {/* Background with same gradient as hero section */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/60 via-emerald-50/60 to-white/60 backdrop-blur-xl rounded-2xl mx-4 my-2"></div>

        {/* Floating particles effect similar to hero */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl mx-4 my-2">
          <div className="absolute top-2 left-8 w-16 h-16 bg-green-300 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-float"></div>
          <div
            className="absolute top-4 right-12 w-12 h-12 bg-emerald-300 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-2 left-16 w-14 h-14 bg-lime-300 rounded-full mix-blend-multiply filter blur-lg opacity-20 animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div
          className={`container mx-auto relative z-10 transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md shadow-lg border border-white/20"
              : "bg-white/10 backdrop-blur-md shadow-md border border-white/10"
          } rounded-2xl`}
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-all duration-300 p-1">
                  <PriorityImage
                    src="/images/logopondokpermai.png"
                    webpSrc="/images/logopondokpermai.webp"
                    alt="Bank Sampah Pondok Permai Logo"
                    className="w-full h-full object-contain rounded-xl"
                    priority={true}
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                    Bank Sampah
                  </h1>
                  <p className="text-sm text-green-600 font-medium">
                    Pondok Permai
                  </p>
                </div>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-2">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="relative px-4 py-2 text-gray-600 hover:text-green-600 transition-all duration-300 rounded-xl hover:bg-green-50/50 backdrop-blur-sm group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl hover:bg-green-50/50 backdrop-blur-sm transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <div className="absolute top-20 left-4 right-4 bg-gradient-to-br from-green-50/95 via-emerald-50/95 to-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 animate-fade-in-up">
            <nav className="p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-600 hover:text-green-600 hover:bg-green-50/50 backdrop-blur-sm rounded-xl transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Spacer to prevent content overlap */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
