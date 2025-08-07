import React from 'react'
import { useMovieContext } from '../contexts/MovieContext'
import { useNavigate } from 'react-router-dom';

function MovieCard({movie}) {

 const { isFavorite, addFavorites, removeFromFavorites } = useMovieContext();

  const favorite = isFavorite(movie.id);
    const navigate = useNavigate();

    function onFavoriteClick(e) {
        e.preventDefault();
        e.stopPropagation(); 
        if(favorite) removeFromFavorites(movie.id)
          else addFavorites(movie)
    }

  function handleCardClick() {
  const mediaType =
    movie.media_type || (movie.title ? 'movie' : movie.first_air_date ? 'tv' : 'person');
  if (movie.id && mediaType) {
    navigate(`/${mediaType}/${movie.id}`);
  }
}

   return (
    <div
      onClick={handleCardClick}
        className='relative rounded-lg overflow-hidden bg-movieCard h-full transition-transform duration-200 flex flex-col hover:-translate-y-[5px] cursor-pointer'
    >
      <div className='relative w-full aspect-[2/3]'>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path || movie.profile_path}`}
          alt={movie.title || movie.name}
          className='w-full h-full object-cover rounded-lg'
        />

        <div className='movie-overlay absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 transition-opacity duration-200 bg-gradient-to-b from-black/10 to-black/80 flex flex-col justify-end p-4 rounded-lg'>
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
        <h3 className='text-base m-0 text-white'>{movie.title || movie.name || profile_path || original_title}</h3>

        {(movie.release_date || movie.first_air_date) && (
          <p className='text-sm text-white'>
            {movie.release_date?.split('-')[0] || movie.first_air_date?.split('-')[0]}
          </p>
        )}
      </div>
    </div>
  );
}

export default MovieCard