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

  // Detect Android
  const isAndroid = /Android/i.test(navigator.userAgent);

  return (
    <div className="relative w-full h-screen md:h-[screen overflow-hidden bg-black">
      
      {/* MOBILE: iPhone / Android */}
      <div
        className={`md:hidden absolute inset-0 overflow-hidden ${
          isAndroid ? "top-[-13%]" : "top-0"
        }`}
      >
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2
                     w-[180vw] h-[60vh]
                     -translate-x-1/2 -translate-y-1/2
                     object-cover scale-[1.8]
                     pointer-events-none"
        ></iframe>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:block absolute inset-0">
        <iframe
          src={videoUrl}
          allow="autoplay; encrypted-media"
          className="absolute top-1/2 left-1/2 
                     w-[150vw] h-[150vh]
                     -translate-x-1/2 -translate-y-1/2 
                     object-cover pointer-events-none"
        ></iframe>
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
