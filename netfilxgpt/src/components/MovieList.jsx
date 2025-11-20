import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title = "Movies", movies = [] }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-4">
      <h1 className="text-white text-xl font-semibold mb-2">{title}</h1>

      <div className="flex gap-3 overflow-x-scroll no-scrollbar pb-3 flex-nowrap">
        {movies.map((m) => {
          const image = m.poster_path || m.backdrop_path;   // ❤️ FIXED
          return <MovieCard key={m.id} imagePoster={image} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
