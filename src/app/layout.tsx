import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import { IBM_Plex_Sans, Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { cn } from '@/lib/utils';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const ibmPlex = IBM_Plex_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex',
});

export const metadata = {
  title: {
    default: 'Sinopsisp: Analisis & Opini Film, Game, dan Kultur Pop',
    template: '%s | sinopsisp',
  },
  description: 'Analisis mendalam, opini, dan sinopsis terbaru dari dunia film, game, dan kultur pop.',
  keywords: ['film', 'game', 'sinopsis', 'review', 'analisis', 'opini', 'kultur pop'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          ibmPlex.variable,
          inter.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
