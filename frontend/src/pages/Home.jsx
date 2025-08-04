import React from 'react'
import MovieCard from '../components/MovieCard'
import { useState, useEffect } from 'react';
import { searchMovies, getPopularMovies } from '../Services/api';

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err){
                setError("Failed to load movies...");
                console.log(err);
            }
            finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) {
            return
        }
        if (loading) return
        setLoading(true);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
            
        } finally{setLoading(false)}

        setSearchQuery("");
    }

  return (
    <div className='home md:py-[32px] md:px-0 w-full py-[16px] px-0'>

        <form onSubmit={handleSearch} className='search-form max-w-[600px] mt-0 mx-auto md:mb-[32px]  mb-[16px] flex gap-[16px] py-0 px-[16px]'>

            <input type="text" placeholder='Search for movies...' className='search-input flex-1 py-[12px] px-[16px] border-none rounded-md bg-bgHome text-white text-[16px] focus: outline-none shadow-home' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>

            <button type='submit' className='search-button py-[12px] px-[24px] bg-bgSearch text-white rounded-md font-500 whitespace-nowrap transition-colors duration-200 hover: bg-hoverSearch'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}
        {loading ? (<div className='loading'>Loading...</div>)
        : ( <div className='movies-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
'>
            {movies.map(
                (movie) => 
                (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
    )}

     </div>  
  );
}

export default Home