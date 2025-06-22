'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Movie } from '@/lib/types';
import Link from 'next/link';
import { getPosterImage } from '@/lib/tmdb';

export function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link href={`/movie/${movie.id}`} className="card group overflow-hidden h-full flex flex-col border border-transparent hover:border-accent-orange transition-all duration-300 rounded-lg">
      <div className="relative">
        <Image
          src={movie.poster_path ? getPosterImage(movie.poster_path) : '/placeholder.png'}
          alt={movie.title}
          width={400}
          height={600}
          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {movie.vote_average && (
          <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400" fill="currentColor" />
            <span>{movie.vote_average.toFixed(1)}</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg line-clamp-2 mb-2">{movie.title}</h3>
        {movie.release_date && (
            <p className="text-sm text-muted-foreground mt-auto">
            {new Date(movie.release_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
            </p>
        )}
      </div>
    </Link>
  );
} 