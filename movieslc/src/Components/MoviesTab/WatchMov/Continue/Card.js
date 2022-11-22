import React from 'react'
import PropTypes from 'prop-types'
import wface from '../../../../Assets/w-face.jpg'

import './cards.css'

function Card({title, imageSource, overview}) {
  return (
    <div className='continue-card card'>
        <figure>
          <img className='cont-img card-img-top' src={imageSource} alt="" />
          <div className="capa">
            <div className="sub-capa">
              <div className="capa-title">
                {title}
              </div>
              <div className="capa-country">
                Country: United States
              </div>
              <div className="capa-overview">
                {overview}
              </div>
            </div>
          </div>
        </figure>
        <div className="cont-friends-watch">
                <div className="img-friends">
                    <img src={wface} alt="" />
                </div>
                <div className='text-fw'>
                    2 viewers
                </div>
        </div>
        <div className='continue-sub-card'>
          <div className='continue-container-play'>
            <i className="bi bi-play-circle"></i>
            <i className="bi bi-play-circle-fill"></i>
            <div className='container-text'>
              <div className='title-movie'>{title}</div>
              <div className='release-date'>3h ago</div>
            </div>
            <div className="container-sup-dur">
              <div class="line-1"></div>
              <div className='continue-container-duration'>
                <div className='duration'>02:28:05</div>
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