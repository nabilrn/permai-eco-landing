const KnowledgeSection = () => {
  const categories = [
    {
      title: "Organik",
      description:
        "Sisa makanan, daun, dan ranting yang mudah terurai secara alami dan dapat dijadikan kompos.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 28V16" />
          <path d="M16 16c-2-4-8-6-8-12a8 8 0 0116 0c0 6-6 8-8 12z" />
          <path d="M12 28h8" />
        </svg>
      ),
    },
    {
      title: "Anorganik",
      description:
        "Plastik, kertas, logam, dan kaca yang dapat didaur ulang menjadi produk baru.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 6l8-2 8 2v10c0 6-8 12-8 12s-8-6-8-12V6z" />
          <path d="M12 16l3 3 5-6" />
        </svg>
      ),
    },
    {
      title: "B3 / Berbahaya",
      description:
        "Limbah beracun seperti baterai, elektronik, dan bahan kimia yang memerlukan penanganan khusus.",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4l12 20H4L16 4z" />
          <path d="M16 14v4" />
          <circle cx="16" cy="22" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section id="knowledge" className="relative py-20 md:py-28 overflow-hidden">
      {/* Full-bleed background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat photo-graded"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=1920&q=80')",
        }}
      />
      {/* Warm fog overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(30,50,35,0.85), rgba(20,35,25,0.88))",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Text overlay */}
        <div className="mb-14 animate-on-scroll">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-canopy-light mb-4">
            Pengetahuan
          </p>
          <h2
            className="font-serif text-3xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
          >
            Pemilahan Sampah
          </h2>
          <p className="text-white/70 max-w-lg leading-relaxed">
            Pelajari teknik pemilahan sampah yang benar dan manfaatnya bagi
            lingkungan dan masyarakat sekitar.
          </p>
        </div>

        {/* Glassmorphism category cards */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 animate-on-scroll">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="stagger-child p-5 sm:p-6 md:p-8 rounded-lg border border-white/15 bg-white/[0.07] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.12] hover:border-white/25"
            >
              <div className="text-white/80 mb-3 sm:mb-4">{cat.icon}</div>
              <h3 className="font-serif text-lg sm:text-xl text-white mb-2">
                {cat.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
