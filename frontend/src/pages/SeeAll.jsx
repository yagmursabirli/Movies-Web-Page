// src/components/BackToTopButton.jsx

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPopularTV, getPopularPeople, getPopularMovies, searchMovies, searchPeople, searchTV } from '../Services/api'
import MovieCard from '../components/MovieCard'
import BackToTopButton from '../components/BackToTopButton';
import SearchBar from '../components/SearchBar';
import LoadingState from '../components/LoadingState';

function SeeAll() {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');

    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [placeholderText, setPlaceholderText] = useState("Search...");

    const [isLoading, setIsLoading] = useState(true);

    const handleSearch = async (query) => {
        if (!query) {
            setSearchResults([]);
            return;
        }
        setLoading(true);
        setError(null);
        try {
            let results = [];
            if (type === 'movie') {
                results = await searchMovies(query);
            } else if (type === 'tv') {
                results = await searchTV(query);
            } else if (type === 'people' || type === 'person') {
                results = await searchPeople(query);
            }
            setSearchResults(results);
        } catch (err) {
            setError("Failed to search. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            if (type === 'movie') {
                setTitle("All Movies");
                setPlaceholderText("Search for movies...");
                setItems(await getPopularMovies());
            } else if (type === 'tv') {
                setTitle("All TV Shows");
                setPlaceholderText("Search for TV Shows...");
                setItems(await getPopularTV());
            } else if (type === 'people' || type === 'person') {
                setTitle("All People");
                setPlaceholderText("Search for people...");
                setItems(await getPopularPeople());
            }
            setIsLoading(false);
        }
        fetchData();
    }, [type]);

    const uniqueItems = items.reduce((unique, item) => {
        if (!unique.some(u => u.id === item.id)) {
            unique.push(item);
        }
        return unique;
    }, []);

      if (isLoading) {
    return <LoadingState/>
  }

    return (
        <div className='bg-home min-h-screen'>
            <SearchBar onSearch={handleSearch}  placeholderText={placeholderText}/>
            {loading && <div className="text-center">Loading...</div>}
            {error && <div className="text-center text-red-500">{error}</div>}

            {searchResults.length > 0 ? (
                <div className= "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
                    {searchResults
                        .filter(item => item.profile_path || item.poster_path)
                        .map(item => <MovieCard key={item.id} movie={item} />)}
                </div>
            ) : (
                <>
                    <h2 className='text-2xl font-bold ml-[20px] md:my-[15px] mb-4 text-white'>{title}</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
                        {uniqueItems
                            .filter(item => item.profile_path || item.poster_path)
                            .map(item => (
                                <MovieCard key={item.id} movie={item} />
                            ))}
                    </div>
                </>
            )}
            <BackToTopButton />
        </div>
    )
}

export default SeeAll;