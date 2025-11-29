import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="relative z-30 md:mt-[-220px] space-y-4 px-4">
      <MovieList
        title="Now Playing"
        movies={movies.nowPlayingMovies}
      />
      <MovieList
        title="Popular"
        movies={movies.popularMovies}
      />

      <MovieList
        title="Top Rated"
        movies={movies.topRatedMovies}
      />

      <MovieList
        title="Upcoming"
        movies={movies.upcomingMovies}
      />
    </div>
  );
};

export default SecondaryContainer;
