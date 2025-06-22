import { Suspense } from 'react';
import { GameCard } from '@/components/GameCard';
import { PageTransition } from '@/components/PageTransition';
import { getPopularGames } from '@/lib/rawg';
import { Game } from '@/lib/types';
import { Skeleton } from '@/components/ui/skeleton';

async function GamesList() {
  const games = await getPopularGames();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game: Game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

function GameListSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(12)].map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-40 w-full rounded-lg" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function GamesPage() {
  return (
    <PageTransition>
      <div className="container py-8 pt-12">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            World of Games
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover top-rated and trending games from our curated collection.
          </p>
        </header>
        <Suspense fallback={<GameListSkeleton />}>
          <GamesList />
        </Suspense>
      </div>
    </PageTransition>
  );
} 