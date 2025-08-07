import React from 'react'
import Slider from '../components/Slider'
import {getPopularTV, getPopularPeople, getPopularMovies} from '../Services/api'
import { useState, useEffect } from 'react';
import BackToTopButton from '../components/BackToTopButton';
import LoadingState from '../components/LoadingState';


function HomeV2() {

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
  

    useEffect(() => {
        async function fetchData() {
          setIsLoading(true);
           
            const tv = await getPopularTV();
            const ppl = await getPopularPeople();
            const movies = await getPopularMovies();

            setTvShows(tv);
            setPeople(ppl);
            setMovies(movies); 
            setIsLoading(false);    
        }
        fetchData()
    }, [])


     if (isLoading) {
    return <LoadingState/>
  }
  return (
    <div className='space-y-12 p-8  bg-home text-white'>
   
        <Slider title="TV Shows" items={tvShows} type="tv"/>
        <Slider title="People" items={people} type="person"/>
        <Slider title="Movies" items={movies} type="movie"/>
        <BackToTopButton/>
    </div>
    
  )
}

export default HomeV2