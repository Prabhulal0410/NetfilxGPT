import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestion = () => {

const { movieResult, movieNames } = useSelector(store => store.gpt);

  // Safe check
  if (!Array.isArray(movieNames) || movieNames.length === 0) return null;

  return (
    <>
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName + index}
          title={movieName}
          movies={movieResult?.[index] || []} 
        />
      ))}
    </>
  );
};

export default GptMovieSuggestion;
