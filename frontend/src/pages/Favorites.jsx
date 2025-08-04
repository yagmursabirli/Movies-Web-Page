import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {

  const {favorites} = useMovieContext();

  if (favorites) {

    return ( 
    <div>
      <h2 className='favorites'>Your Favorites</h2>
    <div className='movies-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
'>
            {favorites.map(
                (movie) => 
                (<MovieCard movie={movie} key={movie.id}/>))}
        </div>
        </div>
    );
  }
  return (
    <div className='favorites-empty text-center md:py-[64px] md:px-[32px]
      bg-bgFavorites border-[12px] my-[32px] mx-auto max-w-[600px]'>
        <h2 className='mb-[16px] text-[32px] text-h2'>no favorites yet</h2>
        <p className='text-p text-[19px] leading-[26px] '>start adding movies to your favorites and they will appear in here</p>
    </div>
  )
}

export default Favorites