'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SearchDialog } from './SearchDialog';
import { cn } from '@/lib/utils';
import { MobileMenu } from './MobileMenu';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/games', label: 'Games' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out',
        scrolled ? 'bg-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
      style={{ '--header-height': '64px' } as React.CSSProperties}
    >
      <div className="container mx-auto flex h-[var(--header-height)] items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          sinopsisp
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          <SearchDialog />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
} 