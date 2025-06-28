import { Handshake } from "lucide-react";

const PartnershipSection = () => {
  const partners = [
    {
      name: "Semen Padang",
      type: "Industri",
      logo: "/images/colab/semenpadang.png",
      description: "Program Nabuang Sarok",
      program: "Nabuang Sarok",
    },
    {
      name: "Griya Luhu",
      type: "Mitra Teknologi",
      logo: "/images/colab/griyaluhulogo.png",
      description: "Program Digitalisasi Bank Sampah",
      program: "Digitalisasi",
    },
    {
      name: "Universitas Andalas",
      type: "Perguruan Tinggi",
      logo: "/images/colab/unand.png",
      description: "Program KKN Tematik Lingkungan",
      program: "KKN Tematik",
    },
    {
      name: "Universitas Negeri Padang",
      type: "Perguruan Tinggi",
      logo: "/images/colab/unp.png",
      description: "Program KKN Pengabdian Masyarakat",
      program: "KKN",
    },
  ];

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Mitra Kerja Sama
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bersama berbagai pihak, kami berkomitmen untuk menciptakan
            lingkungan yang lebih bersih dan berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 transform hover:scale-105 animate-on-scroll group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-4 shadow-md transform group-hover:rotate-3 transition-transform duration-200 overflow-hidden">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = "flex";
                    }
                  }}
                />
                <div
                  className="w-16 h-16 bg-green-100 rounded-lg items-center justify-center"
                  style={{ display: "none" }}
                >
                  <span className="text-green-600 font-bold text-xs text-center">
                    {partner.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {partner.name}
              </h3>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium mb-2">
                {partner.type}
              </span>
              <div className="mb-3">
                <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                  {partner.program}
                </span>
              </div>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
