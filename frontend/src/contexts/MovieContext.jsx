import React from 'react'
import { createContext, useState, useContext, useEffect } from 'react'
import LoadingState from '../components/LoadingState';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider= ({children}) => {

    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const storedFavs = localStorage.getItem("favorites");

        if(storedFavs) setFavorites(JSON.parse(storedFavs));
        setIsLoading(false); 
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);

    const addFavorites = (movie) => {
        //favorites.push()
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }

    const value = {
        favorites,
        addFavorites,
        removeFromFavorites,
        isFavorite
    }

    if (isLoading) {
        <LoadingState/>
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
 
