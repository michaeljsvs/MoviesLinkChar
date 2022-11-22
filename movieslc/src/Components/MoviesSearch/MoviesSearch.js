import React from 'react'

import './movsearch.css'

function MoviesSearch({movies, setMovies}) {
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
    return (
        <div className="movshearch" >
            <div className="container mt-3">
                <i class="bi bi-arrow-left-circle-fill" onClick={() => {setMovies([])}}></i>
                <div className="row">
                {movies.map((movie) => (
                    <div className='col-md-4 mb-3' key={movie.id}>
                    <img src={`${URL_IMAGE + movie.poster_path}`} alt="" height={600} width="100%"/>
                    <h4 className='text-center'>{movie.title}</h4>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default MoviesSearch