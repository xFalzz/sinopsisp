import { Suspense } from 'react';
import { MovieCard } from '@/components/MovieCard';
import { PageTransition } from '@/components/PageTransition';
import { getPopularMovies } from '@/lib/tmdb';
import { Skeleton } from '@/components/ui/skeleton';
import { Movie } from '@/lib/types';

async function MovieList() {
  const movies = await getPopularMovies();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie: Movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {[...Array(15)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[450px] w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MoviesPage() {
  return (
    <PageTransition>
      <div className="container py-8 pt-12">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            World of Cinema
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a curated collection of cinematic masterpieces and popular films.
          </p>
        </header>
        <Suspense fallback={<MovieListSkeleton />}>
          <MovieList />
        </Suspense>
      </div>
    </PageTransition>
  );
} 