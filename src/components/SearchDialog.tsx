'use client';

import { useState, useEffect, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Gamepad2, Search, Film, Loader2 } from 'lucide-react';
import { Movie, Game } from '@/lib/types';
import { searchMovies } from '@/lib/tmdb';
import { searchGames } from '@/lib/rawg';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Button } from './ui/button';
import { useDebounce } from '@/hooks/use-debounce';

function isMovie(item: Movie | Game): item is Movie {
    return (item as Movie).title !== undefined;
}

export function SearchDialog() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [isPending, startTransition] = useTransition();
  
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (debouncedQuery.length > 2) {
      startTransition(async () => {
        const [movieResults, gameResults] = await Promise.all([
          searchMovies(debouncedQuery),
          searchGames(debouncedQuery)
        ]);
        setMovies(movieResults);
        setGames(gameResults);
      });
    } else {
      setMovies([]);
      setGames([]);
    }
  }, [debouncedQuery]);

  const runCommand = (command: () => unknown) => {
    setOpen(false);
    command();
  };

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 xl:mr-2" />
        <span className="hidden xl:inline-flex">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <div className="flex items-center border-b px-3">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <input
            placeholder="Search for a movie or game..."
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        </div>
        <CommandList>
            <CommandEmpty>{!isPending && query.length > 2 ? 'No results found.' : 'Type to search...'}</CommandEmpty>
            {movies.length > 0 && (
            <CommandGroup heading="Movies">
                {movies.map((movie) => (
                <CommandItem
                    key={`movie-${movie.id}`}
                    value={movie.title}
                    onSelect={() => runCommand(() => router.push(`/movie/${movie.id}`))}
                >
                    <Film className="mr-2 h-4 w-4" />
                    {movie.title}
                </CommandItem>
                ))}
            </CommandGroup>
            )}
            {games.length > 0 && (
            <CommandGroup heading="Games">
                {games.map((game) => (
                <CommandItem
                    key={`game-${game.id}`}
                    value={game.name}
                    onSelect={() => runCommand(() => router.push(`/game/${game.id}`))}
                >
                    <Gamepad2 className="mr-2 h-4 w-4" />
                    {game.name}
                </CommandItem>
                ))}
            </CommandGroup>
            )}
        </CommandList>
      </CommandDialog>
    </>
  );
} 