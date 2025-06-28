
import { Handshake, Building2, Users, Leaf } from 'lucide-react';

const PartnershipSection = () => {
  const partners = [
    {
      name: "Kementerian Lingkungan Hidup",
      type: "Pemerintah",
      icon: Building2,
      description: "Dukungan kebijakan lingkungan"
    },
    {
      name: "Komunitas Hijau Jakarta",
      type: "NGO",
      icon: Users,
      description: "Kolaborasi program edukasi"
    },
    {
      name: "PT Hijau Lestari",
      type: "Swasta",
      icon: Leaf,
      description: "Kemitraan pengolahan sampah"
    },
    {
      name: "Universitas Lingkungan",
      type: "Akademisi",
      icon: Building2,
      description: "Penelitian dan pengembangan"
    }
  ];

  return (
    <section id="partnership" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Handshake className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Mitra Kerja Sama</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bersama berbagai pihak, kami berkomitmen untuk menciptakan lingkungan yang lebih bersih dan berkelanjutan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-stagger-${index + 1}`}
            >
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <partner.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{partner.name}</h3>
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium mb-3">
                {partner.type}
              </span>
              <p className="text-gray-600 text-sm">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
