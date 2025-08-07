import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDetails } from '../Services/api';
import { useMovieContext } from '../contexts/MovieContext';
import BackToTopButton from '../components/BackToTopButton';

function Detail() {
  const { id } = useParams();
  const path = window.location.pathname;
  const type = path.includes("/tv/") ? "tv" : path.includes("/person/") ? "person" : "movie";

  const { isFavorite, addFavorites, removeFromFavorites } = useMovieContext();

  const [data, setData] = useState(null);
  const [showFullBio, setShowFullBio] = useState(false);


  useEffect(() => {
    async function fetchDetails() {
      try {
        const res = await getDetails(type, id);
        setData(res);
      } catch (err) {
        console.error("Detail fetch failed:", err);
      }
    }
    fetchDetails();
  }, [id, type]);

  if (!data) return <div className="text-center p-8 text-white">Loading...</div>;

  
  const favorite = isFavorite(data.id);

   return (
    <div className="p-8 text-white bg-home min-h-screen">
      <div className="max-w-5xl mx-auto flex flex-col gap-4">

       <h1 className="text-3xl font-bold mb-10 text-center md:text-left self-center md:self-start">{data.title || data.name}</h1>

      <div className="flex flex-col md:flex-row  gap-6 justify-center items-center md:items-start">
       
        {data.poster_path || data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.profile_path}`}
            alt={data.title || data.name}
            className="w-[300px] rounded-lg mb-4"
          />
        ) : null}

        
        <div className="flex-1 flex flex-col justify-center items-center md:items-end mb-4 ">
          <button
            onClick={() =>
              favorite ? removeFromFavorites(data.id) : addFavorites(data)
            }
            className={`text-sm md:text-base px-[10px] py-2 w-[300px] items-center justify-center rounded-full transition-colors duration-200 ${
              favorite ? 'bg-red-600 text-white' : 'bg-white text-black hover:bg-gray-200'
            }`}
          >
            {favorite ? '♥ Favorited' : '♡ Add to Favorites'}
          </button>

          {type === 'person' ? (
            <div className="text-center md:text-right mt-[30px] max-w-[700px]">
              <p>
                {showFullBio
                  ? data.biography
                  : data.biography?.slice(0, 1340) + (data.biography?.length > 1340 ? "..." : "")}
              </p>
              {data.biography?.length > 1340 && (
                <button
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="mt-6 text-blue-400 hover:underline text-sm"
                >
                  {showFullBio ? "Show less" : "Read more"}
                </button>
              )}
            </div>
          ) : (

          <p className='text-center md:text-right md:text-2xl  mt-[30px] max-w-[700px] '>{data.overview || data.biography || "No description available."}</p>

          )}
        </div>

        
      </div>
    </div>
    <BackToTopButton/>
  </div>
 
);
}


export default Detail;
