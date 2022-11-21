import React from 'react'
import CardsPop from './CardsPop'

import './popular.css'

function Popular() {
  return (
    <div className='Popular-mov'>
        <div className="title-popular-cont">
            <div className="title-popular">
                Popular movies 2021
            </div>
        </div>
        <div className="all-movies">
            All movies {'>'}
        </div>
        <div className='container-cards'>
            <CardsPop/>
        </div>
    </div>
  )
}

export default Popular