import React from 'react'
import CardsCont from './CardsCont';

import './continue.css'

function ContWatching() {
  return (
    <div className='Continue-watch'>
        <div className="title-continue-cont">
            <div className="title-continue">
                Continue Watching
            </div>
            <div className="cont-movies">
                <div className="text-cont-movies">
                    4 Movies
                </div>
            </div>
        </div>
        <div className="all-movies">
            All movies {'>'}
        </div>
        <div className='container-cards'>
            <CardsCont/>
        </div>
    </div>
  )
}

export default ContWatching