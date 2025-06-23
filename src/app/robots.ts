import { MetadataRoute } from 'next';

// Required for static export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = 'https://sinopsisp.vercel.app'; // Ganti dengan domain Anda nanti

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}