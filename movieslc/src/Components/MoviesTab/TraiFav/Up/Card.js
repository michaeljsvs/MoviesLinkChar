import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

function Card({title, imageSource, overview, trailerCountry, trailerDate}) {
  return (
    <div className='traifav-card card'>
        <img className='img-up card-img-top' src={imageSource} alt="" />
        <div className="container-eye">
          <i class="bi bi-eye"></i>
          <div className='title-eye'>2.3 M</div>
        </div>
        <div className='sub-card'>
          <div className='container-play'>
            <i className="bi bi-play-circle"></i>
            <i className="bi bi-play-circle-fill"></i>
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

// Card.propTypes = {
//   title: PropTypes.string.isRequired,
//   imageSource: PropTypes.string,
//   overview: PropTypes.string
// }

export default Card