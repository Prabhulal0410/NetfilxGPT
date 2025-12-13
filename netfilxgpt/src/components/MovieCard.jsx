import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ imagePoster, movie }) => {
  if (!imagePoster) return null;

  return (
    <div
      role="listitem"
      className="shrink-0 w-[150px] h-[225px] md:w-[165px] md:h-[250px] rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-110"
    >
      <img
        loading="lazy"
        src={IMG_CDN + imagePoster}
        alt={movie?.title || movie?.name || "Movie Poster"}

        // Prevent CLS (keeps layout stable)
        width="165"
        height="250"

        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;
