const BASE_URL = "https://www.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//sending request to api 
export async function getPopularMovies(limit = 50) {
  const movies = [];
  let page = 1;

  while (movies.length < limit) {
    const res = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`);
    if (!res.ok) {
      throw new Error("API request failed!!");
    }
    const data = await res.json();
    movies.push(...data.results);

    if (data.page >= data.total_pages) break;
    page++;
  }

  return movies.slice(0, limit);
}

 

export async function getPopularTV(limit = 50) {
  const tv = [];
  let page = 1;
  while(tv.length < limit){
  const res = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&page=${page}`);
  if (!res.ok) {
    throw new Error("API request failed!!");
  }
  const data = await res.json();
  tv.push(...data.results);
  if (data.page >= data.total_pages) break;
  page++;
}
  return tv.slice(0, limit);
}

export async function getPopularPeople(limit = 50) {
  const people = [];
  let page = 1;
  while (people.length < limit) {
  const res = await fetch(`https://api.themoviedb.org/3/trending/person/day?api_key=${API_KEY}&page=${page}`);
  if (!res.ok) {
    throw new Error("API request failed!!");
  }
  const data = await res.json();
  people.push(...data.results);  

      if (data.page >= data.total_pages) break;
    page++;
  }

  return people.slice(0, limit);
}

export const searchMovies = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error("Search failed");
  }
  const data = await response.json();
  return data.results;
};

export async function getDetails(type, id) {
  const res = await fetch(`https://api.themoviedb.org/3/${type}/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
  if (!res.ok) throw new Error("Detail fetch failed");
  const data = await res.json();
  return data;
}
