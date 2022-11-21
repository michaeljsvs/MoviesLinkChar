import React from 'react'
import PropTypes from 'prop-types'
import wface from '../../../../Assets/w-face.jpg'

import './cards.css'

function Card({title, imageSource, overview}) {
  return (
    <div className='popular-card card'>
        <img className='card-img-top' src={imageSource} alt="" />
        <div className='popular-sub-card'>
          <div className='pop-container-play'>
            <i className="bi bi-play-circle"></i>
            <i className="bi bi-play-circle-fill"></i>
            <div className='container-text'>
              <div className='title-movie'>{title}</div>
              <div className='release-date'>Drama/Action</div>
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