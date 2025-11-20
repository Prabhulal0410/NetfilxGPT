import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ imagePoster }) => {
  if (!imagePoster) return null;

  return (
    <div
      className="flex-shrink-0 w-[150px] h-[225px] md:w-[165px] md:h-[250px]
                 rounded-md overflow-hidden cursor-pointer
                 transition-transform duration-300 hover:scale-110"
    >
      <img
        src={IMG_CDN + imagePoster}
        alt="movie poster"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MovieCard;

