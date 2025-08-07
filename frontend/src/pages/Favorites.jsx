import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorites() {

  const {favorites} = useMovieContext();

    if (!favorites || favorites.length === 0) {
    return (
      <div className='favorites-empty text-center md:py-[64px] md:px-[32px]  mx-auto min-h-screen bg-home w-full'>
        <h2 className='mb-[16px] text-[32px] mt-[40px] text-red-300 font-semibold'>No Favorites Yet</h2>
        <p className='text-p text-[19px] leading-[26px] '>Start adding movies, people or tv shows to your favorites and they will appear in here.</p>
      </div>
    );
  }

 return (
    <div className='bg-home min-h-screen w-full'>
      <h2 className='favorites m-5 text-2xl font-bold ml-[40px] text-white'>Your Favorites</h2>
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