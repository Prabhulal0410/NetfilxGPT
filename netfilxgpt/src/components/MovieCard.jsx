import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ imagePoster, title }) => {
  if (!imagePoster) return null;

  return (
    <div
      className="shrink-0 w-[150px] h-[225px] md:w-[165px] md:h-[250px]
                 rounded-md overflow-hidden cursor-pointer
                 transition-transform duration-300 hover:scale-110"
    >
      <img
        src={IMG_CDN + imagePoster}

        // ⭐ SEO: Use actual movie title inside alt
        alt={title ? `${title} movie poster` : "Movie poster"}

        // ⭐ Performance: Lazy loading enables loading images only when visible
        loading="lazy"

        // ⭐ UX: Smooth fade-in loading
        className="w-full h-full object-cover transition-opacity duration-500 opacity-0"
        onLoad={(e) => (e.currentTarget.style.opacity = 1)}
      />
    </div>
  );
};

export default MovieCard;
