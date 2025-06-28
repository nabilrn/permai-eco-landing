
import { Recycle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Bank Sampah</h1>
              <p className="text-sm text-green-600 font-medium">Pondok Permai</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-gray-600 hover:text-green-600 transition-colors">Beranda</a>
            <a href="#gallery" className="text-gray-600 hover:text-green-600 transition-colors">Galeri</a>
            <a href="#location" className="text-gray-600 hover:text-green-600 transition-colors">Lokasi</a>
            <a href="#partnership" className="text-gray-600 hover:text-green-600 transition-colors">Mitra</a>
            <a href="#organization" className="text-gray-600 hover:text-green-600 transition-colors">Kepengurusan</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
