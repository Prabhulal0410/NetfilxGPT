import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title = "Movies", movies = [] }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="pl-1 md:pl-14">
      
      {/* ⭐ SEO: Section heading helps Google understand movie category */}
      <h1 className="text-white text-lg md:text-xl font-semibold mb-2">
        {title}
      </h1>

      <div className="flex gap-3 overflow-x-scroll no-scrollbar pb-3 flex-nowrap">
        {movies.map((movie) => {
          const image = movie.poster_path || movie.backdrop_path;

          return (
            <MovieCard
              key={movie.id}

              // ⭐ Pass title for SEO-friendly alt text in MovieCard
              title={movie.title || movie.name || "Movie"}

              // Poster path
              imagePoster={image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
