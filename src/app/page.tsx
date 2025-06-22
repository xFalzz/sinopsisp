import Image from 'next/image';
import Link from 'next/link';
import { getTrendingMovies, getPosterImage, getBackdropImage } from '@/lib/tmdb';
import { getPopularGames } from '@/lib/rawg';
import { TrendingSidebar } from '@/components/TrendingSidebar';
import { PageTransition } from '@/components/PageTransition';
import { Movie, Game } from '@/lib/types';
import { Suspense } from 'react';

function isMovie(item: Movie | Game): item is Movie {
  return (item as Movie).title !== undefined;
}

function HeroCard({ item }: { item: Movie | Game }) {
  const movie = isMovie(item) ? item : null;
  const game = !isMovie(item) ? item : null;

  const title = movie?.title || game?.name;
  const imageUrl = movie?.backdrop_path ? getBackdropImage(movie.backdrop_path) : game?.background_image;
  const link = movie ? `/movie/${movie.id}` : `/game/${game?.id}`;

  return (
    <article className="relative col-span-12 row-span-2 md:col-span-8 group">
      <Link href={link} className="absolute inset-0 z-10" aria-label={title} />
      {imageUrl && (
        <div className="relative h-full w-full overflow-hidden rounded-xl">
          <Image
            src={imageUrl || '/placeholder.png'}
            alt={title || 'Hero image'}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
      )}
      <div className="absolute bottom-0 z-20 p-6 md:p-8">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/80">
          {isMovie(item) ? 'Film Populer' : 'Game Populer'}
        </p>
        <h1 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
          {title}
        </h1>
      </div>
    </article>
  );
}

function GridCard({ item }: { item: Movie | Game }) {
    const movie = isMovie(item) ? item : null;
    const game = !isMovie(item) ? item : null;

    const title = movie?.title || game?.name;
    const imageUrl = movie?.backdrop_path ? getBackdropImage(movie.backdrop_path) : game?.background_image;
    const link = movie ? `/movie/${movie.id}` : `/game/${game?.id}`;

    return (
        <article className="relative col-span-6 md:col-span-4 group">
        <Link href={link} className="absolute inset-0 z-10" aria-label={title} />
        {imageUrl && (
            <div className="relative h-full w-full overflow-hidden rounded-xl">
            <Image
                src={imageUrl || '/placeholder.png'}
                alt={title || 'Grid image'}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>
        )}
        <div className="absolute bottom-0 z-20 p-4 md:p-6">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/80">
                {isMovie(item) ? 'Film' : 'Game'}
            </p>
            <h2 className="font-heading text-lg font-bold leading-tight text-white md:text-xl">
            {title}
            </h2>
        </div>
        </article>
    );
}

function ListCard({ item }: { item: Movie | Game }) {
    const movie = isMovie(item) ? item : null;
    const game = !isMovie(item) ? item : null;
  
    const title = movie?.title || game?.name;
    const imageUrl = movie?.poster_path ? getPosterImage(movie.poster_path) : game?.background_image;
    const link = movie ? `/movie/${movie.id}` : `/game/${game?.id}`;
    const description = movie?.overview || (game?.released ? `Rilis: ${game.released}` : '');

  return (
    <article className="group relative flex flex-col space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
      <Link href={link} className="absolute inset-0 z-10" aria-label={title} />
      {imageUrl && (
        <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-48">
            <Image
            src={imageUrl || '/placeholder.png'}
            alt={title || 'List item image'}
            fill
            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, 200px"
            />
        </div>
      )}
      <div className="flex flex-1 flex-col justify-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary/60">
          {isMovie(item) ? 'Film' : 'Game'}
        </p>
        <h3 className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-muted-foreground line-clamp-2">
          {description}
        </p>
      </div>
    </article>
  );
}

async function HomeContent() {
  const [trendingMovies, popularGames] = await Promise.all([
    getTrendingMovies(),
    getPopularGames()
  ]);

  if (!trendingMovies?.length && !popularGames?.length) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold">Failed to Load Data</h2>
        <p className="text-muted-foreground mt-2">
          Could not retrieve data from the server. Please check your API keys or try again later.
        </p>
      </div>
    );
  }
  
  const heroItem = trendingMovies[0];
  const gridItem1 = popularGames[0];
  const gridItem2 = trendingMovies[1];
  
  const latestContent = [...popularGames.slice(1, 4), ...trendingMovies.slice(2, 5)];

  return (
    <>
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold">Hot This Week</h2>
        <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[550px]">
          {heroItem && <HeroCard item={heroItem} />}
          {gridItem1 && <GridCard item={gridItem1} />}
          {gridItem2 && <GridCard item={gridItem2} />}
        </div>
      </section>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <section className="col-span-1 lg:col-span-8">
          <h2 className="mb-6 text-3xl font-bold">Latest Articles</h2>
          <div className="space-y-10">
            {latestContent.map((item) => (
              <ListCard key={isMovie(item) ? `movie-${item.id}`: `game-${item.id}`} item={item} />
            ))}
          </div>
        </section>

        <aside className="col-span-1 lg:col-span-4">
          <Suspense fallback={<div>Loading sidebar...</div>}>
            <TrendingSidebar movies={trendingMovies.slice(0, 5)} games={popularGames.slice(0, 5)} />
          </Suspense>
        </aside>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <PageTransition>
      <div className="container mx-auto max-w-7xl px-4 py-8 pt-12">
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <HomeContent />
        </Suspense>
      </div>
    </PageTransition>
  );
}
