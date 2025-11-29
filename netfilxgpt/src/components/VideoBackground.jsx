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
    <div
      className="
      relative w-full 
      h-[100vh]        /* FULL mobile height like Netflix */
      md:h-[90vh]      /* desktop height unchanged */
      overflow-hidden bg-black
    "
    >
      {/* ⭐ MOBILE: Proper vertical cropped video like Netflix */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2
                      w-[180vw] h-[60vh]      /* oversized horizontally for cropping */
                      -translate-x-1/2 -translate-y-1/2
                      object-cover scale-[1.8]             /* zoom in like Netflix */
                      pointer-events-none
                      "
        ></iframe>
      </div>

      {/* ⭐ DESKTOP: Fullscreen trailer */}
      <div className="hidden md:block absolute inset-0">
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

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
