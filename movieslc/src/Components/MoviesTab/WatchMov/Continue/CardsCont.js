import React, { useEffect, useState} from 'react'
import Card from './Card'
import axios from 'axios'
import Youtube from 'react-youtube'

function CardsCont() {
    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '9d952392c2d64077f8d3639f26f761da'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'

    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({ title: "Loading Movies"})
    const [trailer, setTrailer] = useState(null)

    const fetchMovies = async (searchKey) => {
        const type = searchKey ? "search" : "discover"
        const {data: { results } , } = await axios.get(`${API_URL}/${type}/movie`, {
          params: {
            api_key: API_KEY,
            query: searchKey
          }
        })
        setMovies(results)
        setMovie(results[0])
    
        if(results.length) {
            await fetchMovie(results[0].id)
        }
    }
    
    // Funcion para la peticion de un solo objeto y mostrar en reproductor de video
    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${API_URL}/movie/${id}`, {
        params: {
            api_key: API_KEY,
            append_to_response: "videos"
        }
        })
    
        if (data.videos && data.videos.results){
        const trailer = data.videos.results.find(
            (vid) => vid.name === "Official Trailer"
        )
        setTrailer(trailer ? trailer : data.videos.results[0])
        }
    
        setMovie(data)
    }

    useEffect(() => {
        fetchMovies()
    },[])
    
    return (
        <div className='container d-flex justify-content-center align-items-center p-0'>
            <div className="cont-row row">
                {
                    movies.slice(17, 19).map(movie => (
                        <div className="col-md-6" key={movie.id}>
                            <Card 
                                title={movie.title} 
                                imageSource={`${URL_IMAGE + movie.backdrop_path}`} 
                                overview={movie.overview}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
  )
}

export default CardsCont