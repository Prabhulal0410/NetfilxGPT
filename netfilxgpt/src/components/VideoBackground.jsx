import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";
import { useState, useEffect } from "react";

const VideoBackground = ({ movieId }) => {
  useTrailerVideos(movieId);
  const trailer = useSelector((store) => store.movies?.trailerVideo);

  const [iframeLoaded, setIframeLoaded] = useState(false);

  // Delay iframe rendering for performance
  useEffect(() => {
    const timeout = setTimeout(() => setIframeLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const poster = trailer?.thumbnail || "/default-poster.jpg";

  return (
    <section
      aria-label="Movie Trailer Background"
      className="relative w-full h-screen md:h-[screen] overflow-hidden bg-black"
    >
      {/* Poster image placeholder */}
      <img
        src={poster}
        alt="Movie Poster Placeholder"
        className={`absolute inset-0 w-full h-full object-cover ${
          iframeLoaded ? "hidden" : "block"
        }`}
      />

      {/* MOBILE / TABLET */}
      {iframeLoaded && trailer && (
        <div
          className={`md:hidden absolute inset-0 overflow-hidden ${
            /Android/i.test(navigator.userAgent) ? "top-[-13%]" : "top-0"
          }`}
        >
          <iframe
            title="Movie Trailer Mobile"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=${trailer.key}`}
            allow="autoplay; encrypted-media"
            loading="lazy"
            referrerPolicy="no-referrer"
            aria-label="Trailer video for mobile"
            className="absolute top-1/2 left-1/2 w-[180vw] h-[60vh] -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.8] pointer-events-none"
          />
        </div>
      )}

      {/* DESKTOP */}
      {iframeLoaded && trailer && (
        <div className="hidden md:block absolute inset-0">
          <iframe
            title="Movie Trailer Desktop"
            src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&loop=1&playlist=${trailer.key}`}
            allow="autoplay; encrypted-media"
            loading="lazy"
            referrerPolicy="no-referrer"
            aria-label="Trailer video for desktop"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          />
        </div>
      )}

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
    </section>
  );
};

export default VideoBackground;
