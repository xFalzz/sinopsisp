'use client';

import { Twitter, Facebook, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function SocialShare({ title }: { title: string }) {
  const pathname = usePathname();
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, [pathname]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    // Tambahkan notifikasi toast nanti
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon">
          <Twitter className="h-4 w-4" />
        </Button>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon">
          <Facebook className="h-4 w-4" />
        </Button>
      </a>
      <Button variant="outline" size="icon" onClick={copyToClipboard}>
        <Copy className="h-4 w-4" />
      </Button>
    </div>
  );
} 