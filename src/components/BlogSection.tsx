
import { BookOpen, Recycle, Leaf, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Apa itu Bank Sampah?",
      excerpt: "Bank sampah adalah konsep pengumpulan sampah kering dan dipilah dari rumah tangga. Sampah yang terkumpul ditimbang dan dihargai dengan sejumlah uang.",
      icon: Recycle,
      category: "Edukasi"
    },
    {
      id: 2,
      title: "Manfaat Bank Sampah",
      excerpt: "Mengurangi volume sampah, meningkatkan kesadaran masyarakat, memberikan nilai ekonomis pada sampah, serta menciptakan lingkungan yang bersih.",
      icon: Leaf,
      category: "Lingkungan"
    },
    {
      id: 3,
      title: "Cara Kerja Bank Sampah",
      excerpt: "Masyarakat memilah sampah, menyetorkan ke bank sampah, sampah ditimbang dan dicatat, nasabah mendapat tabungan sesuai nilai sampah.",
      icon: Users,
      category: "Prosedur"
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Ilmu Pengetahuan Bank Sampah</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pelajari lebih lanjut tentang konsep bank sampah dan manfaatnya untuk lingkungan dan masyarakat
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.id} 
              className={`hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-on-scroll cursor-pointer group animate-stagger-${index + 1}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <post.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="text-sm text-green-600 font-medium bg-green-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-green-600 font-medium text-sm hover:text-green-700 transition-colors">
                    Baca Selengkapnya →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-green-100 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tahukah Anda?</h3>
            <p className="text-gray-600 leading-relaxed">
              Setiap 1 kg sampah plastik yang didaur ulang dapat menghemat energi setara dengan 2.000 kWh listrik. 
              Dengan bergabung di Bank Sampah Pondok Permai, Anda turut berkontribusi menyelamatkan bumi!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
