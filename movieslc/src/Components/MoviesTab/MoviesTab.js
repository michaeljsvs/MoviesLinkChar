import React from 'react'
import TraiFav from './TraiFav/TraiFav'
import WatchMov from './WatchMov/WatchMov'

import './moviestab.css'

function MoviesTab() {
  return (
    <div className='MoviesTab'>
        <TraiFav/>
        <WatchMov/>
    </div>
  )
}

export default MoviesTab