import React from 'react';
import './CardList.css';
import Cards from './Cards';

const CardList = ({ movies }) => {
  return (
    <div className="card-list">
      {movies.map((movie, index) => (
        <Cards key={index} movie={movie} />
      ))}
    </div>
  );
};

export default CardList;
