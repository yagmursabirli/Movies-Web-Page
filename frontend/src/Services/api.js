const BASE_URL = "https://www.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//sending request to api 
export async function getPopularMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  if (!res.ok) {
    throw new Error("API request failed!!");
  }
  const data = await res.json();
  return data.results;
}
 

export const searchMovies = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Search failed");
  }
  const data = await response.json();
  return data.results;
};