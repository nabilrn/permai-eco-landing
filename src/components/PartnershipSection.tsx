const PartnershipSection = () => {
  const partners = [
    {
      name: "Semen Padang",
      logo: "/images/colab/semenpadang.png",
    },
    {
      name: "Griya Luhu",
      logo: "/images/colab/griyaluhulogo.png",
    },
    {
      name: "Universitas Andalas",
      logo: "/images/colab/unand.png",
    },
    {
      name: "Universitas Negeri Padang",
      logo: "/images/colab/unp.png",
    },
  ];

  return (
    <section id="partnership" className="py-16 md:py-20 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10 animate-on-scroll">
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-text">
            Mitra Kerja Sama
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 animate-on-scroll">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative flex flex-col items-center justify-center"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-24 md:h-32 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10">
                <span className="text-sm font-semibold text-[#1B2B1F] bg-white px-4 py-2 rounded-lg shadow-xl border border-gray-200">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
