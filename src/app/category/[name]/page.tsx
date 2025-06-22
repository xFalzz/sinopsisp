import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';
import Image from 'next/image';

// Data dummy yang lebih baik dengan gambar placeholder
const dummyPosts = [
  {
    slug: 'inception-review',
    title: 'Inception - Film yang Mengubah Cara Kita Melihat Mimpi',
    excerpt: 'Christopher Nolan membawa kita ke dalam dunia mimpi yang kompleks dan menantang logika.',
    category: 'Review',
    date: '2025-06-22',
    cover: 'https://image.tmdb.org/t/p/w1280/8I37V9j0gIKr8oG2v2T4zLq4tI.jpg' // Inception backdrop
  },
  {
    slug: 'korean-cinema-insight', 
    title: 'The Rise of Korean Cinema di Era Digital',
    excerpt: 'Bagaimana film Korea berhasil mendominasi pasar global dengan storytelling yang unik.',
    category: 'Insight',
    date: '2025-06-21',
    cover: 'https://image.tmdb.org/t/p/w1280/pci1Ar3ZyPTa7y2vi4q1znK22iM.jpg' // Parasite backdrop
  },
  {
    slug: 'dune-part-two-synopsis',
    title: 'Sinopsis: Dune Part Two - Pertarungan untuk Arrakis',
    excerpt: 'Denis Villeneuve melanjutkan epik sci-fi yang memukau dengan visual dan narasi yang lebih dalam.',
    category: 'Sinopsis',
    date: '2025-06-20',
    cover: 'https://image.tmdb.org/t/p/w1280/s1xnjbOIQtwGObPnydTebp74G2c.jpg' // Dune 2 backdrop
  }
];

export async function generateStaticParams() {
  const categories = [...new Set(dummyPosts.map((post) => post.category))];
  return categories.map((category) => ({
    name: category.toLowerCase(),
  }));
}

interface CategoryPageProps {
  params: {
    name: string;
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = decodeURIComponent(params.name);
  const posts = dummyPosts.filter(
    (post) => post.category.toLowerCase() === categoryName
  );

  if (posts.length === 0) {
    notFound();
  }

  return (
    <main className="container max-w-6xl mx-auto py-8 px-4">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Kategori: {posts[0].category}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          {posts.length} artikel ditemukan
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/post/${post.slug}`}
            className="card p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow overflow-hidden"
          >
            {post.cover && (
              <div className="relative w-full h-40">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            )}
            
            <div className="p-2 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="bg-accent-yellow text-black px-2 py-1 rounded-full text-xs font-semibold">
                  {post.category}
                </span>
                <span className="text-xs text-neutral-500">
                  {format(new Date(post.date), 'dd MMM yyyy', { locale: id })}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold line-clamp-2">
                {post.title}
              </h2>
              
              {post.excerpt && (
                <p className="text-sm text-neutral-600 dark:text-neutral-300 line-clamp-3">
                  {post.excerpt}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 