import React, { useEffect } from 'react'
import instance from './instance'
import { useState } from 'react'
import './Slider.css';

function Slider({ title,isPoster, fetchUrl }) {

    const base_url = "https://image.tmdb.org/t/p/original/";


    const [movies, setmovies] = useState([])

    const getMovies = async () => {
        const { data } = await instance.get(fetchUrl)
        setmovies(data.results);
    }
    console.log(movies);



    useEffect(() => {
        getMovies()



    }, [])




    return (
        <div className='row'>
            <h1>{title}</h1>
            <div className='movies'>
                {
                    movies.map(movie => (
                        <img className={`movie ${isPoster&&'poster'}}`} src={`${base_url}/${isPoster?movie.poster_path:movie.backdrop_path}`} alt={`${movie.name}`} />
                    ))
                }

            </div>

        </div>
    )
}

export default Slider