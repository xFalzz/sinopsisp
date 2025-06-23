import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Game } from '@/lib/types';
import { CommentSection } from '@/components/CommentSection';
import { SocialShare } from '@/components/SocialShare';
import { PageTransition } from '@/components/PageTransition';
import { getGameDetail, getPopularGames } from '@/lib/rawg';

export async function generateStaticParams() {
  try {
    const games: Game[] = await getPopularGames();

    if (!games || games.length === 0) {
      // Fallback with some static game IDs if API fails
      console.warn('No games found from API, using fallback IDs');
      return [
        { id: '3498' }, // Grand Theft Auto V
        { id: '4200' }, // Portal 2
        { id: '5286' }, // Tomb Raider
        { id: '13536' }, // Portal
        { id: '12020' }, // Left 4 Dead 2
      ];
    }

    return games.map((game) => ({
      id: game.id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params for games:', error);
    // Return fallback static IDs
    return [
      { id: '3498' },
      { id: '4200' },
      { id: '5286' },
      { id: '13536' },
      { id: '12020' },
    ];
  }
}

type Props = {
  params: Promise<{ id: string }>;
};

export default async function GameDetailPage({ params }: Props) {
  const { id } = await params;
  const game: Game = await getGameDetail(id);

  if (!game) return notFound();

  return (
    <PageTransition>
      <div className="relative h-[60vh] min-h-[450px] w-full">
        <Image
          src={game.background_image || ''}
          alt={`Backdrop for ${game.name}`}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl px-4 pb-12 -mt-32 relative z-10">
        <header className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 text-white text-shadow-lg">{game.name}</h1>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
              {game.genres?.map((g) => (
                <span key={g.id} className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  {g.name}
                </span>
              ))}
            </div>
        </header>

        <div className="bg-card text-card-foreground p-8 rounded-xl shadow-2xl">
            <p className="mb-6 text-lg leading-relaxed text-center max-w-3xl mx-auto">{game.description_raw}</p>
            
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-muted-foreground my-6">
                {game.rating && <span>⭐ <span className="font-semibold text-foreground">{game.rating?.toFixed(1)}</span> / 5</span>}
                {game.released && <span>📅 Released: <span className="font-semibold text-foreground">{new Date(game.released).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span></span>}
            </div>

            <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground font-semibold">Available on:</p>
                <p className="text-base text-foreground">{game.platforms?.map((p) => p.platform.name).join(', ')}</p>
            </div>
            
            <div className="mt-8 flex justify-center">
                <SocialShare title={game.name} />
            </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Discussion</h2>
          <CommentSection />
        </div>

      </div>
    </PageTransition>
  );
}