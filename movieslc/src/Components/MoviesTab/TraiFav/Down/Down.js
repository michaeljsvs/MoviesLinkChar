import React from 'react'

import './down.css'

function Down() {
  return (
    <div className="Down">
      <div className="title-fav">
        Favourite genres
      </div>
      <div className="genres-container">
        <div className="row-1 row">
          <div className="col-md-4" key="1">
            <div className="genre-1">
              Action
            </div>
          </div>
          <div className="col-md-4" key="2">
            <div className="genre-2">
              Western
            </div>
          </div>
          <div className="col-md-4" key="3">
            <div className="genre-3">
              Adventures
            </div>
          </div>
        </div>
        <div className="row-2 row">
          <div className="col-md-4" key="4">
            <div className="genre-4">
              Drama
            </div>  
          </div>
          <div className="col-md-4" key="5">
            <div className="genre-5">
              Sci-Fi
            </div> 
          </div>
          <div className="col-md-4" key="6">
          </div>
        </div>
      </div>
      <div className="add-fav">
        <i class="bi bi-plus-circle-fill"></i>
        Add your favourite genres
      </div>
      <div className="fav-na">
        <div className="row-3 row">
            <div className="col-md-4" key="7">
              <div className="genre-6">
                Crime
              </div>  
            </div>
            <div className="col-md-4" key="8">
              <div className="genre-7">
                Comedy
              </div> 
            </div>
            <div className="col-md-4" key="9">
              <div className="genre-8">
                Thiller
              </div>
            </div>
          </div>
      </div>
      </div>
  )
}

export default Down