const API_KEY = process.env.TMDB_API_KEY;

// No console.log here to avoid clutter in production
// console.log("TMDB API Key loaded:", API_KEY);

const API_BASE_URL = 'https://api.themoviedb.org/3';

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const getPosterImage = (path: string) => `${TMDB_IMAGE_BASE_URL}w500${path}`;
export const getBackdropImage = (path: string) => `${TMDB_IMAGE_BASE_URL}w1280${path}`;

async function tmdbFetch(endpoint: string) {
    const url = `${API_BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        console.error("TMDB API Error:", { status: response.status, message: error.status_message });
        throw new Error(`Failed to fetch from TMDB: ${error.status_message || response.statusText}`);
    }
    return response.json();
}

export const getTrendingMovies = async () => {
    if (!API_KEY) return [];
    try {
        const data = await tmdbFetch('trending/movie/week');
        return data.results;
    } catch (error) {
        console.error("Error in getTrendingMovies:", error);
        return [];
    }
};

export const getPopularMovies = async () => {
    if (!API_KEY) return [];
    try {
        const data = await tmdbFetch('movie/popular');
        return data.results;
    } catch (error) {
        console.error("Error in getPopularMovies:", error);
        return [];
    }
};

export const getNowPlayingMovies = async () => {
    if (!API_KEY) return [];
    try {
        const data = await tmdbFetch('movie/now_playing');
        return data.results;
    } catch (error) {
        console.error("Error in getNowPlayingMovies:", error);
        return [];
    }
}

export const getMovieDetail = async (id: string | number) => {
    if (!API_KEY) return null;
    try {
        return await tmdbFetch(`movie/${id}`);
    } catch (error) {
        console.error(`Error in getMovieDetail for id ${id}:`, error);
        return null;
    }
};

export const searchMovies = async (query: string) => {
    if (!API_KEY) return [];
    try {
        const data = await tmdbFetch(`search/movie?query=${encodeURIComponent(query)}`);
        return data.results;
    } catch (error) {
        console.error(`Error in searchMovies for query "${query}":`, error);
        return [];
    }
}; 