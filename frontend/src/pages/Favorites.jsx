import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {

  const {favorites} = useMovieContext();

    if (!favorites || favorites.length === 0) {
    return (
      <div className='favorites-empty text-center md:py-[64px] md:px-[32px]
        my-[32px] mx-auto max-w-[600px]'>
        <h2 className='mb-[16px] text-[32px] text-red-500 font-semibold'>No Favorites Yet</h2>
        <p className='text-p text-[19px] leading-[26px] '>Start adding movies, people or tv shows to your favorites and they will appear in here.</p>
      </div>
    );
  }

 return (
    <div>
      <h2 className='favorites m-5 text-2xl font-bold ml-[40px]'>Your Favorites</h2>
      <div className='movies-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 m-8'>
        {favorites.map(
          (movie) => (
            <MovieCard movie={movie} key={movie.id} />
          )
        )}
      </div>
    </div>
  );
}
export default Favorites