import React from 'react'
import Slider from '../components/Slider'
import {getPopularTV, getPopularPeople, getPopularMovies} from '../Services/api'
import { useState, useEffect } from 'react';

function HomeV2() {

    const [movies, setMovies] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    const [people, setPeople] = useState([]);
    


    useEffect(() => {
        async function fetchData() {

           
            const tv = await getPopularTV();
            const ppl = await getPopularPeople();
            const movies = await getPopularMovies();

            setTvShows(tv);
            setPeople(ppl);
            setMovies(movies);     
        }
        fetchData()
    }, [])

  return (
    <div className='space-y-12 p-8'>
        <Slider title="TV Shows" items={tvShows} type="tv"/>
        <Slider title="People" items={people} type="person"/>
        <Slider title="Movies" items={movies} type="movie"/>
    </div>
  )
}

export default HomeV2