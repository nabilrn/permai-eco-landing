
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const LocationMap = () => {
  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Lokasi Kami</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kunjungi Bank Sampah Pondok Permai dan bergabung dengan komunitas peduli lingkungan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-lg p-8 transform hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Alamat</h4>
                    <p className="text-gray-600">
                      RT.01/RW.03, Limau Manis Sel.<br />
                      Kec. Pauh, Kota Padang<br />
                      Sumatera Barat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telepon</h4>
                    <p className="text-gray-600">+62 812-6707-8480</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">bpondokpermai@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 transform hover:translate-x-2 transition-transform duration-200">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Jam Operasional</h4>
                    <p className="text-gray-600">
                      Setiap Sabtu<br />
                      Jam 07:00 - 10:00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31914.23035780162!2d100.46165359999999!3d-0.9422627000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd4b79a46b310cf%3A0xaa3d8901ce9ad2da!2sBank%20Sampah%20Pondok%20Permai!5e0!3m2!1sid!2sid!4v1751106293507!5m2!1sid!2sid"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Bank Sampah Pondok Permai"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
