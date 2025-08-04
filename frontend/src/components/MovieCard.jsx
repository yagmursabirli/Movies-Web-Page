import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'

function MovieCard({movie}) {

 const { isFavorite, addFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e.preventDefault()
        if(favorite) removeFromFavorites(movie.id)
          else addFavorites(movie)
    }

  return (
    <div className='relative rounded-lg overflow-hidden bg-[#1a1a1a] h-full transition-transform duration-200 flex flex-col hover:-translate-y-[5px]'>
  <div className='relative w-full aspect-[2/3]'>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className='w-full h-full object-cover' />

    <div className='movie-overlay absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-gradient-to-b from-black/10 to-black/80 flex flex-col justify-end p-4'>
     <button
        onClick={onFavoriteClick}
        className={`absolute top-4 right-4 text-[1.5rem] p-2 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 hover:bg-black/80 ${
          favorite ? 'text-[#ff4757]' : 'text-white'
        }`}
      >
        ♥
      </button>
    </div>
  </div>
  <div className='p-4 flex-1 flex flex-col gap-2'>
    <h3 className='text-base m-0'>{movie.title}</h3>
    <p className='text-sm text-gray-400'>{movie.release_date?.split("-")[0]}</p>
  </div>
</div>

  )
}

export default MovieCard