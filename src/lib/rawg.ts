const API_KEY = process.env.RAWG_API_KEY;

// console.log("RAWG API Key loaded:", API_KEY);

const API_BASE_URL = 'https://api.rawg.io/api';

async function rawgFetch(endpoint: string) {
    const url = `${API_BASE_URL}/${endpoint}${endpoint.includes('?') ? '&' : '?'}key=${API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        console.error("RAWG API Error:", { status: response.status, message: error.detail });
        throw new Error(`Failed to fetch from RAWG: ${error.detail || response.statusText}`);
    }
    return response.json();
}

export const getPopularGames = async () => {
    if (!API_KEY) return [];
    try {
        const data = await rawgFetch('games?ordering=-rating&page_size=12');
        return data.results;
    } catch (error) {
        console.error("Error in getPopularGames:", error);
        return [];
    }
};

export const getGameDetail = async (id: string | number) => {
    if (!API_KEY) return null;
    try {
        return await rawgFetch(`games/${id}`);
    } catch (error) {
        console.error(`Error in getGameDetail for id ${id}:`, error);
        return null;
    }
};

export const searchGames = async (query: string) => {
    if (!API_KEY) return [];
    try {
        const data = await rawgFetch(`games?search=${encodeURIComponent(query)}`);
        return data.results;
    } catch (error) {
        console.error(`Error in searchGames for query "${query}":`, error);
        return [];
    }
}; 