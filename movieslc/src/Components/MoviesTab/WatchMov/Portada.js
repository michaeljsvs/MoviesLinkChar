import React from 'react'
import wface from '../../../Assets/w-face.jpg'

import "./portada.css";

function Portada({title, imageSource, overview, trailer}) {
    return (
        <div className='Portada card'>
            <img className='card-img-top' src={imageSource} alt="" />
            <div className='title-portada'>{title.toUpperCase()}</div>
            <div className="button-portada">
                <div className='container-circle'>
                    <i className="bi bi-play-circle"></i>
                    <i className="bi bi-play-circle-fill"></i>
                </div>
                <div className='text-button-portada'>
                    Watch Now
                </div>
            </div>
            <div className="friends-watch">
                <div className="img-friends">
                    {/* <img src={wface} alt="" /> */}
                    <img src={wface} alt="" />
                </div>
                <div className='text-fw'>
                    +2 friends are watching
                </div>
            </div>
        </div>
    )
}

export default Portada