import { MapPin, Phone, Mail, Clock } from "lucide-react";

const LocationMap = () => {
  const contactItems = [
    {
      icon: MapPin,
      label: "Alamat",
      content: "RT.01/RW.03, Limau Manis Sel., Kec. Pauh, Kota Padang, Sumatera Barat",
    },
    {
      icon: Phone,
      label: "Telepon",
      content: "+62 812-6707-8480",
    },
    {
      icon: Mail,
      label: "Email",
      content: "bpondokpermai@gmail.com",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      content: "Setiap Sabtu, 07:00 - 10:00 WIB",
    },
  ];

  return (
    <section id="location" className="relative py-20 md:py-28 bg-white topo-pattern overflow-hidden">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        <div className="mb-14 animate-on-scroll">
          <h2 className="font-serif text-3xl md:text-4xl text-deep-forest mb-3">
            Lokasi Kami
          </h2>
          <p className="text-muted-text max-w-xl">
            Kunjungi Bank Sampah Pondok Permai dan bergabung dengan komunitas
            peduli lingkungan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact info */}
          <div className="animate-on-scroll order-2 lg:order-1">
            <div className="space-y-5 sm:space-y-6">
              {contactItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-[18px] h-[18px] text-forest-green" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-deep-forest mb-0.5">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-text leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map */}
          <div className="animate-on-scroll order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden border border-[#E8DFD0] mb-6 lg:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31914.23035780162!2d100.46165359999999!3d-0.9422627000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b79a46b310cf%3A0xaa3d8901ce9ad2da!2sBank%20Sampah%20Pondok%20Permai!5e0!3m2!1sid!2sid!4v1751106293507!5m2!1sid!2sid"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Bank Sampah Pondok Permai"
                className="sm:h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
