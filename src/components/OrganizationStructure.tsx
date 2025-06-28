import {
  Users,
  User,
  Shield,
  BookOpen,
  Wrench,
  FileText,
  Recycle,
  Palette,
} from "lucide-react";

const OrganizationStructure = () => {
  const structure = [
    {
      position: "Direktur",
      name: "Athila Laboer",
      icon: Shield,
      description: "Memimpin keseluruhan operasional bank sampah",
    },
    {
      position: "Wakil Direktur",
      name: "Juraimah",
      icon: User,
      description: "Membantu direktur dalam menjalankan program",
    },
    {
      position: "Sekretaris",
      name: "Sauqiyati Azkia Darman, Salaabilla Fransisca Oktomadina",
      icon: FileText,
      description: "Mengelola administrasi dan dokumentasi",
    },
    {
      position: "Bendahara",
      name: "Eva Martha",
      icon: BookOpen,
      description: "Mengelola keuangan dan pembukuan",
    },
    {
      position: "Bidang Penerimaan, Pemilahan dan Pencatatan",
      name: "Ismawati Ismail, Guslaini",
      icon: Recycle,
      description: "Mengelola penerimaan, pemilahan dan pencatatan sampah",
    },
    {
      position: "Bidang Pengembangan dan Kerajinan Usaha",
      name: "Roslina Tobing, Yuniasri, Ripos Maradona",
      icon: Palette,
      description: "Mengembangkan usaha kerajinan dari bahan daur ulang",
    },
  ];

  return (
    <section id="organization" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Struktur Kepengurusan
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tim berpengalaman yang berkomitmen untuk memajukan Bank Sampah
            Pondok Permai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {structure.map((member, index) => (
            <div
              key={member.position}
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 animate-on-scroll`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 transform hover:rotate-12 transition-transform duration-200">
                  <member.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {member.position}
                  </h3>
                  <p className="text-green-600 font-medium">{member.name}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrganizationStructure;
