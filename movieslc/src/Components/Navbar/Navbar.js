import React, {useState} from 'react'
import axios from 'axios'
import './navbar.css'

function Navbar({movies, setMovies}) {
    const API_URL = 'https://api.themoviedb.org/3'
    const API_KEY = '9d952392c2d64077f8d3639f26f761da'
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original'
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original'
  
    // Variables de estado
    const [searchKey, setSearchKey] = useState("")
    const [trailer, setTrailer] = useState(null)
    const [movie, setMovie] = useState({ title: "Loading Movies"})
    const [playing, setPlaying] = useState(false)
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

    //Funcion para buscar peliculas
    const searchMovies = (e) => {
        // Evita que la pagina se esté recargando cada vez que se haga una petición
        e.preventDefault()
        fetchMovies(searchKey)
    }
    return (
        <div>
            {/* Menu */}
            <nav className='navbar navbar-expand-md navbar-dark'>
                <div className="container-fluid">
                    {/* Icono */}
                    <a className="navbar-brand" href="#!">
                        <span className='text-logo'>LinkChar</span>
                    </a>
                    {/* Boton del menu */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Elementos del menu colapsable */}
                    <div className="collapse navbar-collapse justify-content-between" id="menu">
                        <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                            <li className="nav-item">
                                <a className='nav-link active' href="#!">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link'href="#!">TV shows</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="#!">Animations</a>
                            </li>
                            <li className="nav-item">
                                <a className='nav-link' href="#!">Plans</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* Buscador */}
            <div className="container-perfil">
                <form className='form-search' onSubmit={searchMovies}>
                    <input className='input-search' type="text" placeholder=' Search' onChange={(e) => setSearchKey(e.target.value)}/>
                    <button className='btn bi-search'></button>
                </form>
            </div>
        </div>
    )
}

export default Navbar

