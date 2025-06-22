export interface Game {
  id: number;
  slug: string;
  name: string;
  released?: string;
  background_image?: string;
  rating?: number;
  platforms?: { platform: { id: number; name: string; slug: string } }[];
  genres?: { id: number; name: string; slug: string }[];
  description_raw?: string;
  description?: string;
  developers?: { name: string }[];
  detail?: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Movie {
  id: number;
  title: string;
  name?: string; // name is for TV, title for movie
  overview: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  vote_average?: number;
  genres?: { id: number; name: string }[];
  tagline?: string;
  runtime?: number;
  original_language?: string;
  success?: boolean; // For error checking from TMDB
  platforms?: { platform: Platform }[];
  developers?: { name: string }[];
  description_raw?: string;
  description?: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  body: string;
} 