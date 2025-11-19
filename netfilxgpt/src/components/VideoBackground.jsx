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
    <div className="relative w-screen h-[95vh] overflow-hidden bg-black">

      {/* OVERSIZED IFRAME TRICK LIKE NETFLIX */}
      <iframe
        src={videoUrl}
        allow="autoplay; encrypted-media"
        className="
          absolute top-1/2 left-1/2 
          w-[200vw] h-[200vh]
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none
        "
      ></iframe>

      {/* Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t 
                      from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
