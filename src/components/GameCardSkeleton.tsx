export function GameCardSkeleton() {
  return (
    <div className="card overflow-hidden h-full flex flex-col">
      <div className="bg-muted h-40 w-full animate-pulse" />
      <div className="p-4 flex flex-col flex-grow">
        <div className="bg-muted h-6 w-3/4 rounded-md animate-pulse mb-2" />
        <div className="bg-muted h-4 w-1/2 rounded-md animate-pulse mt-auto" />
      </div>
    </div>
  );
} 