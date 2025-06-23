import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

// Dapatkan data dari post dan game untuk sitemap
// Untuk sekarang, kita gunakan data statis
const staticRoutes = ['/', '/about', '/contact', '/games'];
const postSlugs = ['inception-review', 'korean-cinema-insight', 'dune-part-two-synopsis'];
const categoryNames = ['sinopsis', 'review', 'insight'];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://sinopsisp.vercel.app'; // Ganti dengan domain Anda nanti

  const staticUrls = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const postUrls = postSlugs.map((slug) => ({
    url: `${siteUrl}/post/${slug}`,
    lastModified: new Date(),
  }));

  const categoryUrls = categoryNames.map((name) => ({
    url: `${siteUrl}/category/${name}`,
    lastModified: new Date(),
  }));

  return [...staticUrls, ...postUrls, ...categoryUrls];
}