import './App.css';
import {useState} from 'react'
import Navbar from './Components/Navbar/Navbar.js'
import MoviesTab from './Components/MoviesTab/MoviesTab.js'
import MoviesSearch from './Components/MoviesSearch/MoviesSearch.js'


function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className='App'>
      <Navbar movies={movies} setMovies={setMovies}/>
      {movies.length === 0 ? (<MoviesTab/>) : (<MoviesSearch movies={movies} setMovies={setMovies}/>)}
    </div>
  );
}

export default App;
