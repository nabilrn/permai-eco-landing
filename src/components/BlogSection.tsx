const BlogSection = () => {
  return (
    <section id="blog" className="relative overflow-hidden">
      {/* Editorial two-column — Peduli Lingkungan */}
      <div className="relative py-20 md:py-28 bg-cream grain-overlay">
        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-[55%_45%] gap-12 lg:gap-16 items-center">
            {/* Text content — left column */}
            <div className="animate-on-scroll">
              <h2 className="font-serif text-3xl md:text-4xl text-deep-forest mb-8">
                Peduli Lingkungan
              </h2>

              <div className="space-y-5 text-muted-text leading-relaxed max-w-[580px]">
                <p className="drop-cap">
                  Bank Sampah Pondok Permai hadir sebagai solusi inovatif dalam
                  mengatasi permasalahan sampah di lingkungan kita. Setiap
                  langkah kecil yang kita ambil hari ini memberikan dampak besar
                  bagi generasi mendatang.
                </p>

                <p>
                  Melalui sistem bank sampah, kami mengubah paradigma masyarakat
                  tentang sampah. Yang dulunya dianggap limbah, kini menjadi
                  sumber daya dengan nilai ekonomi nyata.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="mt-10 pl-6 border-l-4 border-forest-green relative">
                <span
                  className="absolute -left-2 -top-6 font-serif text-earth-warm/15 text-[120px] leading-none select-none pointer-events-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p className="font-serif text-xl italic text-deep-forest leading-relaxed relative">
                  Bumi bukan warisan dari nenek moyang kita, tetapi titipan untuk
                  anak cucu kita.
                </p>
              </blockquote>

              <div className="mt-10">
                <a
                  href="#location"
                  className="inline-flex items-center text-sm font-semibold text-forest-green hover:text-living-green transition-colors"
                >
                  Bergabung Bersama Kami &rarr;
                </a>
              </div>
            </div>

            {/* Photo stack — right column */}
            <div className="animate-on-scroll">
              <div className="relative">
                {/* Larger photo */}
                <div className="rounded-md overflow-hidden border border-[#E8DFD0]">
                  <img
                    src="/images/pemilahan.png"
                    alt="Proses pemilahan sampah"
                    className="w-full h-56 sm:h-64 md:h-80 object-cover photo-graded"
                    loading="lazy"
                  />
                </div>
                {/* Smaller overlapping photo - adjust position for mobile */}
                <div className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-4 md:-right-8 w-2/3 rounded-md overflow-hidden border border-[#E8DFD0] shadow-xl">
                  <img
                    src="/images/penimbangan.png"
                    alt="Penimbangan sampah"
                    className="w-full h-32 sm:h-40 md:h-48 object-cover photo-graded"
                    loading="lazy"
                  />
                </div>
              </div>
              {/* Spacer for overlap - smaller on mobile */}
              <div className="h-8 sm:h-12" />
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner — Mari Bergabung — full-bleed photo */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat photo-graded"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&q=80')",
          }}
        />
        {/* Dark overlay with green tint */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(15,23,20,0.8), rgba(20,40,30,0.85))",
          }}
        />

        <div className="relative z-10 max-w-[700px] mx-auto px-6 text-center">
          <div className="animate-on-scroll">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-canopy-light mb-4">
              Jadilah Bagian dari Perubahan
            </p>
            <h3
              className="font-serif text-3xl md:text-5xl text-white mb-4"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              Mari Bergabung
            </h3>
            <p className="text-white/65 mb-10 max-w-md mx-auto leading-relaxed">
              Setiap sampah yang Anda setorkan adalah investasi untuk masa depan
              yang lebih hijau.
            </p>
            <a
              href="#location"
              className="inline-flex items-center justify-center bg-white text-deep-forest font-semibold px-10 py-4 rounded-lg hover:bg-cream transition-colors text-base"
            >
              Daftar Sekarang
            </a>
            <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm text-white/50">
              <span>Kelola Sampah</span>
              <span className="text-white/20">|</span>
              <span>Edukasi</span>
              <span className="text-white/20">|</span>
              <span>Komunitas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
