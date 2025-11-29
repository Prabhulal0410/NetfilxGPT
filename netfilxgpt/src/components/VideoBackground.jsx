import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";

const VideoBackground = ({ movieId }) => {
  useTrailerVideos(movieId);

  const trailer = useSelector((store) => store.movies?.trailerVideo);
  if (!trailer) return null;

  const videoUrl =
    "https://www.youtube.com/embed/" +
    trailer.key +
    "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=" +
    trailer.key;

  return (
    <div className="
        relative w-full 
        h-[60vh]        /* reduced mobile height */
        md:h-[90vh]    /* desktop height */
        overflow-hidden bg-black
      "
    >
      {/* ⭐ Mobile: 9:16 video */}
      <div className="md:hidden w-full aspect-[9/16] mx-auto overflow-hidden">
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          className="w-full h-full object-cover pointer-events-none"
        ></iframe>
      </div>

      {/* ⭐ Desktop: Fullscreen Background */}
      <div className="hidden md:block">
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          className="
            absolute top-1/2 left-1/2 
            w-[150vw] h-[150vh] 
            -translate-x-1/2 -translate-y-1/2 
            object-cover pointer-events-none
          "
        ></iframe>
      </div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
