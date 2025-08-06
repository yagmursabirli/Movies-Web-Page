import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getPopularTV, getPopularPeople, getPopularMovies } from '../Services/api'
import MovieCard from '../components/MovieCard'
import BackToTopButton from '../components/BackToTopButton';



function SeeAll() {
 
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        async function fetchData() {
            if (type === 'movie') {
                setTitle("All Movies");
                setItems(await getPopularMovies());
            } else if (type === 'tv') {
                setTitle("All TV Shows");
                setItems(await getPopularTV());
            } else if (type === 'people' || type === 'person') {
                setTitle("All People");
                setItems(await getPopularPeople());
            }
        }
        fetchData();
    }, [type]);

     const uniqueItems = items.reduce((unique, item) => {
    if (!unique.some(u => u.id === item.id)) {
      unique.push(item);
    }
    return unique;
  }, []);


  return (
    <div>
      <h2 className='text-2xl font-bold ml-[18px] md:my-[15px]'>{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
        {uniqueItems 
          .filter(item => item.profile_path || item.poster_path)
          .map(item => (
            <MovieCard key={item.id} movie={item} />
          ))}
      </div>
      <BackToTopButton />
    </div>
  )
}


export default SeeAll