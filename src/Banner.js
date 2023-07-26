import React from 'react'
import instance from './instance';
import { useState } from 'react';
import { useEffect } from 'react';
import './Banner.css'

function Banner({ fetchUrl }) {

    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movie, setmovie] = useState([])

    const getMovies = async () => {

        const { data } = await instance.get(fetchUrl)
        console.log(data);


        setmovie(data.results[Math.floor(Math.random() * data.results.length)])


    }
    console.log(movie);




    useEffect(() => {
        getMovies()



    }, [])

    return (
        <div className='banner' style={
            {
                height: '600px',
                backgroundSize: 'cover',

                backgroundImage: `url(${base_url}/${movie.backdrop_path})`
            }
        }>
            <div className='banner1'>
                <h1 className='banner-title'>{movie.title}</h1>
                <h2 className='banner-overview'>{movie.overview}</h2>
            </div>
           

        </div>
    )
}

export default Banner