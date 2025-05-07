import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import CardList from './CardList';
import { fetchTMDBMovies } from './TMDB';
import { fetchWatchmodeData } from './Watchmode';
import logo from './2.png';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    async function loadMovies() {
      const tmdbMovies = await fetchTMDBMovies();
      const enhancedMovies = await fetchWatchmodeData(tmdbMovies);
      setMovies(enhancedMovies);
      setFilteredMovies(enhancedMovies);
    }
    loadMovies();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="App">
      <div className="navbar">
        <div className="navbar-left">
          <div className="logo"><img src={logo} alt="logo" /></div>
        </div>
        <div className="navbar-right">
          <button className="nav-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
      <div className="SearchBarBack">
      <h1></h1>
      <SearchBar onSearch={handleSearch} />
      </div>
      <div className="MainList">
        <p className="Pop">Popular Movies:</p>
      <CardList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default App;

