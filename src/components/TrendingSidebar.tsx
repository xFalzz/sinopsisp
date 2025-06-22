import Link from 'next/link';
import Image from 'next/image';
import { Movie, Game } from '@/lib/types';
import { getPosterImage } from '@/lib/tmdb';

function SidebarItem({ item }: { item: Movie | Game }) {
    const isMovie = (item as Movie).title !== undefined;
    const title = isMovie ? (item as Movie).title : (item as Game).name;
    const url = isMovie ? `/movie/${item.id}` : `/game/${item.id}`;
    const imagePath = isMovie ? (item as Movie).poster_path : (item as Game).background_image;
    const image = isMovie && imagePath ? getPosterImage(imagePath) : imagePath;
    const detail = isMovie 
        ? `Rating: ${(item as Movie).vote_average?.toFixed(1) ?? 'N/A'}` 
        : `Rilis: ${(item as Game).released}`;

    return (
        <Link href={url} className="flex items-center gap-4 group">
            <div className="relative w-16 h-24 rounded-md overflow-hidden shrink-0">
                <Image 
                    src={image || '/placeholder.png'}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="64px"
                />
            </div>
            <div>
                <p className="text-xs uppercase text-muted-foreground font-semibold">{isMovie ? "Film" : "Game"}</p>
                <h3 className="font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{detail}</p>
            </div>
        </Link>
    );
}

export function TrendingSidebar({ movies, games }: { movies: Movie[], games: Game[] }) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4">Trending Topics</h3>
      <div className="space-y-6">
        <div>
          <h4 className="text-lg font-semibold mb-3 text-primary">Popular Movies</h4>
          <div className="space-y-4">
            {movies.map(movie => <SidebarItem key={`movie-${movie.id}`} item={movie} />)}
          </div>
        </div>
        <div className="border-t border-border pt-6">
          <h4 className="text-lg font-semibold mb-3 text-primary">Popular Games</h4>
           <div className="space-y-4">
            {games.map(game => <SidebarItem key={`game-${game.id}`} item={game} />)}
          </div>
        </div>
      </div>
    </div>
  )
} 