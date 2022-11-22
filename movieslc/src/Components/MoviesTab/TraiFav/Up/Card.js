import React, {useEffect, useState} from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import Youtube from 'react-youtube'

import './cards.css'

function Card({idMovie, title, imageSource, overview, trailerCountry, trailerDate}) {
  console.log("🚀 ~ file: Card.js ~ line 9 ~ Card ~ idmovie", idMovie)

  const API_URL = 'https://api.themoviedb.org/3'
  const API_KEY = '9d952392c2d64077f8d3639f26f761da'
  const [trailer, setTrailer] = useState(null)
  const [playing, setPlaying] = useState(false)


  const fetchMovie = async (id) => {
    console.log("🚀 ~ file: Card.js ~ line 17 ~ fetchMovie ~ id", id)
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
  }

  useEffect(() => {
    fetchMovie(idMovie)
  },[])

  return (
    <div className='traifav-card card'>
        
        
        {
          playing ? (
            <>
              <Youtube
                videoId={trailer.key}
                className='reproductor container'
                containerClassName={"youtube-container"}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    cc_load_policy: 0,
                    fs: 0,
                    iv_load_policy: 0,
                    modestbranding: 0,
                    rel: 0,
                    showinfo: 0,

                  }
                }}
              />
              <i className="boton bi bi-x-circle" onClick={() => setPlaying(false)}></i>
            </>
          ) : (
            <div>
              <img className='img-up card-img-top' src={imageSource} alt="" />
              <div className="container-eye">
                <i class="bi bi-eye"></i>
                <div className='title-eye'>2.3 M</div>
              </div>
              <div className='sub-card'>
                <div className='container-play'>
                  <i className="bi bi-play-circle" ></i>
                  <i className="bi bi-play-circle-fill" onClick={() => setPlaying(true)}></i>
                  <div className='container-text'>
                    <div className='title-movie'>{title}</div>
                    <div className='country'>Country: {trailerCountry}</div>
                    <div className='release-date'>3h ago</div>
                  </div>
                  <div className="container-sup-dur">
                    <div class="line-1"></div>
                    <div className='container-duration'>
                      <div className='duration'>01:29</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  imageSource: PropTypes.string,
  overview: PropTypes.string
}

export default Card