import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies= useSelector((store) => store.movies);

  return (
    <div className="relative z-30  md:mt-[-120px] space-y-10 px-4">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={nowPlayingMovies} />
      <MovieList title="Upcoming" movies={nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
