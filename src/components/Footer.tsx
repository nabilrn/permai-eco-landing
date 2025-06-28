
import { Recycle, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Bank Sampah</h3>
                <p className="text-green-400 font-medium">Pondok Permai</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Bersama wujudkan lingkungan bersih dan berkelanjutan untuk generasi mendatang.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">Jl. Pondok Permai No. 123, Jakarta Selatan</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@banksampahpondokpermai.id</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Pengumpulan Sampah</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Daur Ulang</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Edukasi Lingkungan</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Konsultasi</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Program</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Bank Sampah Keliling</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Workshop Kreativitas</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Penanaman Pohon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors text-sm">Komposter Komunitas</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Bank Sampah Pondok Permai. All rights reserved.
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
