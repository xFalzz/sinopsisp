import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Movie } from '@/lib/types';
import { CommentSection } from '@/components/CommentSection';
import { SocialShare } from '@/components/SocialShare';
import { PageTransition } from '@/components/PageTransition';
import { getMovieDetail, getBackdropImage, getPosterImage, getPopularMovies } from '@/lib/tmdb';

export async function generateStaticParams() {
  const movies: Movie[] = await getPopularMovies();
  
  if (!movies) return [];

  return movies.map((movie) => ({
    id: movie.id.toString(),
  }));
}

export default async function MovieDetailPage({ params }: { params: { id: string } }) {
  const movie: Movie = await getMovieDetail(params.id);

  if (!movie || movie.success === false) return notFound();

  return (
    <PageTransition>
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={getBackdropImage(movie.backdrop_path || '')}
          alt={`Backdrop for ${movie.title}`}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>

      <div className="container mx-auto max-w-4xl px-4 pb-12 -mt-48 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="relative w-full md:w-1/3 h-96 md:h-[450px] shrink-0 rounded-xl overflow-hidden shadow-lg">
            {movie.poster_path && (
              <Image
                src={getPosterImage(movie.poster_path)}
                alt={movie.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
          </div>
          <div className="flex-1 pt-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.title}</h1>
            <p className="text-muted-foreground text-lg mb-4">{movie.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {movie.genres?.map((g) => (
                <span key={g.id} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {g.name}
                </span>
              ))}
            </div>
             <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-6">
                <span>⭐ <span className="font-semibold text-foreground">{movie.vote_average?.toFixed(1)}</span> / 10</span>
                <span>🎬 {movie.runtime} min</span>
                {movie.release_date && <span>📅 {new Date(movie.release_date).getFullYear()}</span>}
             </div>
            <p className="mb-6 text-base leading-relaxed">{movie.overview}</p>
             <SocialShare title={movie.title} />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Discussion</h2>
          <CommentSection />
        </div>

      </div>
    </PageTransition>
  );
} 