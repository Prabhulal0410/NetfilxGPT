import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import ShimmerMovieRow from "./ShimmerMovieRow";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  const isLoading =
    movies.nowPlayingMovies.length === 0 ||
    movies.popularMovies.length === 0 ||
    movies.topRatedMovies.length === 0 ||
    movies.upcomingMovies.length === 0;

  return (
    <div className="relative z-30 mt-[-360px] md:mt-[-280px] space-y-4 px-4">
      {isLoading ? (
        <>
          <ShimmerMovieRow />
          <ShimmerMovieRow />
          <ShimmerMovieRow />
          <ShimmerMovieRow />
        </>
      ) : (
        <>
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
          <MovieList title="Popular" movies={movies.popularMovies} />
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
          <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        </>
      )}
    </div>
  );
};

export default SecondaryContainer;
