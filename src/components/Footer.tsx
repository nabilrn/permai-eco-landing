import { Mail, Phone, MapPin, Heart, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-1">
                <img 
                  src="/images/logopondokpermai.png" 
                  alt="Bank Sampah Pondok Permai Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bank Sampah</h3>
                <p className="text-green-400 font-medium">Pondok Permai</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Bersama wujudkan lingkungan bersih dan berkelanjutan untuk
              generasi mendatang.
            </p>

            {/* Social Media Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/bpondokpermai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://wa.me/6281267078480"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  RT.01/RW.03, Limau Manis Sel., Kec. Pauh, Kota Padang,
                  Sumatera Barat
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+62 812-6707-8480</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">bpondokpermai@gmail.com</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Pengumpulan Sampah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Pemilahan Sampah
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Edukasi Lingkungan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Jam Operasional: Sabtu 07:00-10:00 WIB
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Program</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Senam Sehat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Ecoenzim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Pupuk Kompos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                >
                  Pemilahan Sampah
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 Bank Sampah Pondok Permai. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-300">
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>untuk lingkungan yang lebih baik</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
