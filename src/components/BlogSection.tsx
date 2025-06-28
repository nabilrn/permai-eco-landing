
import { Leaf } from 'lucide-react';

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Leaf className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Peduli Lingkungan</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Bersama membangun kesadaran untuk masa depan yang lebih hijau dan berkelanjutan
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6 animate-on-scroll">
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-6">
                <strong className="text-green-700">Bank Sampah Pondok Permai</strong> hadir sebagai solusi inovatif dalam mengatasi permasalahan sampah di lingkungan kita. Kami percaya bahwa setiap langkah kecil yang kita ambil hari ini akan memberikan dampak besar bagi generasi mendatang.
              </p>
              
              <p className="mb-6">
                Melalui sistem bank sampah, kami mengubah paradigma masyarakat tentang sampah. Yang dulunya dianggap sebagai limbah yang tidak berguna, kini menjadi sumber daya yang memiliki nilai ekonomi. Dengan memilah dan mengumpulkan sampah, kita tidak hanya membersihkan lingkungan, tetapi juga menciptakan peluang ekonomi baru.
              </p>
              
              <p className="mb-6">
                Setiap kilogram sampah yang berhasil dikumpulkan dan didaur ulang adalah kontribusi nyata kita untuk mengurangi pencemaran lingkungan. Mari bersama-sama mewujudkan Padang yang lebih bersih, hijau, dan berkelanjutan untuk anak cucu kita.
              </p>
              
              <div className="bg-green-100 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium italic">
                  "Bumi bukan warisan dari nenek moyang kita, tetapi titipan untuk anak cucu kita. Mari jaga bersama!"
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/images/pemilahan.png"
                  alt="Proses pemilahan sampah"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-48 w-full"
                />
                <img
                  src="/images/penimbangan.png"
                  alt="Penimbangan sampah"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-32 w-full"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/images/penjualan.png"
                  alt="Penjualan hasil daur ulang"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-32 w-full"
                />
                <img
                  src="/images/kkn.png"
                  alt="Kegiatan KKN"
                  className="rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover h-48 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mari Bergabung!</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Setiap sampah yang Anda setorkan adalah investasi untuk masa depan yang lebih hijau. 
              Bergabunglah dengan Bank Sampah Pondok Permai dan rasakan manfaatnya langsung.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-green-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Lingkungan Bersih</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Manfaat Ekonomi</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Komunitas Peduli</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
