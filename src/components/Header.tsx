import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Beranda" },
    { href: "#gallery", label: "Galeri" },
    { href: "#organization", label: "Kepengurusan" },
    { href: "#knowledge", label: "Pengetahuan" },
    { href: "#blog", label: "Tentang Kami" },
    { href: "#location", label: "Lokasi" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center">
                <img
                  src="/images/logopondokpermai.png"
                  alt="Bank Sampah Pondok Permai Logo"
                  className={`w-full h-full object-contain transition-all duration-300 ${
                    isScrolled ? "" : "brightness-0 invert"
                  }`}
                  loading="eager"
                />
              </div>
              <div>
                <span
                  className={`text-sm font-bold transition-colors duration-300 ${
                    isScrolled ? "text-deep-forest" : "text-white"
                  }`}
                >
                  Bank Sampah
                </span>
                <span
                  className={`block text-xs font-medium transition-colors duration-300 ${
                    isScrolled ? "text-forest-green" : "text-canopy-light"
                  }`}
                >
                  Pondok Permai
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 hover:text-forest-green group ${
                    isScrolled ? "text-deep-forest/70" : "text-white/85"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-forest-green scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </button>
              ))}
            </nav>

            {/* CTA + Mobile menu */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#blog")}
                className="hidden lg:inline-flex px-5 py-2.5 text-sm font-semibold text-white bg-forest-green rounded-lg hover:brightness-90 transition-all duration-200"
              >
                Bergabung
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? "text-deep-forest" : "text-white"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-[72px] left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-black/5">
            <nav className="max-w-[1200px] mx-auto px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="block w-full text-left px-3 py-2.5 text-sm font-medium text-deep-forest/70 hover:text-forest-green transition-colors rounded"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => handleNavClick("#blog")}
                  className="w-full px-3 py-2.5 text-sm font-semibold text-white bg-forest-green rounded-lg hover:brightness-90 transition-all"
                >
                  Bergabung Sekarang
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
