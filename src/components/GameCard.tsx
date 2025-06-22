'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Game } from '@/lib/types';

export function GameCard({ game }: { game: Game }) {
  return (
    <div className="card group overflow-hidden h-full flex flex-col border border-transparent hover:border-accent-orange transition-all duration-300">
      <div className="relative">
        <Image
          src={game.background_image || '/placeholder.png'}
          alt={game.name}
          width={400}
          height={225}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {game.rating && (
          <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <Star className="w-3 h-3 text-amber-400" fill="currentColor" />
            <span>{game.rating.toFixed(1)}</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg line-clamp-2 mb-2">{game.name}</h3>
        {game.released && (
            <p className="text-sm text-muted-foreground mt-auto">
            {new Date(game.released).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </p>
        )}
      </div>
    </div>
  );
} 