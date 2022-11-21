import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div>
        {/* Menu */}
        <nav className='navbar navbar-expand-md navbar-dark'>
            <div className="container-fluid">
                {/* Icono */}
                <a className="navbar-brand" href="#!">
                    <span className='text-logo'>LinkChar</span>
                </a>
                {/* Boton del menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Elementos del menu colapsable */}
                <div className="collapse navbar-collapse" id="menu">
                    <ul className='navbar-nav me-auto'>
                        <li className="nav-item">
                            <a className='nav-link active' href="#!">Movies</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link'href="#!">TV shows</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#!">Animations</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#!">Plans</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar

