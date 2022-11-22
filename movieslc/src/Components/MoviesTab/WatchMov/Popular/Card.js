import React from 'react'
import PropTypes from 'prop-types'

import './cards.css'

function Card({title, imageSource, overview, popularity}) {
  return (
    <div className='popular-card card'>
        <img className='img-pop card-img-top' src={imageSource} alt="" />
        <div className='popular-sub-card'>
          <div className='pop-container-play'>
            <i className="bi bi-play-circle"></i>
            <i className="bi bi-play-circle-fill"></i>
            <div className='container-text'>
              <div className='title-movie'>{title}</div>
              <div className='release-date'>Drama/Action</div>
            </div>
            <div className="container-sup-star">
              <i class="bi bi-star-fill"></i>
              {popularity}
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