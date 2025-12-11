import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";
import { useState, useEffect } from "react";

const VideoBackground = ({ movieId }) => {
  useTrailerVideos(movieId);

  const trailer = useSelector((store) => store.movies?.trailerVideo);
  const [iframeLoaded, setIframeLoaded] = useState(false); // lazy-load state

  if (!trailer) return null;

  const videoUrl =
    "https://www.youtube.com/embed/" +
    trailer.key +
    "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=" +
    trailer.key;

  const isAndroid = /Android/i.test(navigator.userAgent);

  // ⭐ Lazy-load iframe when component mounts (avoids heavy render on first paint)
  useEffect(() => {
    const timeout = setTimeout(() => setIframeLoaded(true), 500); // small delay
    return () => clearTimeout(timeout);
  }, []);

  // Poster image for faster first paint (optional: you can use movie poster)
  const poster = trailer.thumbnail || "/default-poster.jpg";

  return (
    <section
      aria-label="Movie Trailer Background"
      className="relative w-full h-screen md:h-[screen] overflow-hidden bg-black"
    >
      {/* POSTER IMAGE PLACEHOLDER */}
      {!iframeLoaded && (
        <img
          src={poster}
          alt="Movie Poster Placeholder"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* MOBILE / TABLET */}
      {iframeLoaded && (
        <div
          className={`md:hidden absolute inset-0 overflow-hidden ${
            isAndroid ? "top-[-13%]" : "top-0"
          }`}
        >
          <iframe
            title="Movie Trailer Mobile"
            src={videoUrl}
            allow="autoplay; encrypted-media"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute top-1/2 left-1/2 w-[180vw] h-[60vh]
                       -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.8]
                       pointer-events-none"
          ></iframe>
        </div>
      )}

      {/* DESKTOP */}
      {iframeLoaded && (
        <div className="hidden md:block absolute inset-0">
          <iframe
            title="Movie Trailer Desktop"
            src={videoUrl}
            allow="autoplay; encrypted-media"
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh]
                       -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          ></iframe>
        </div>
      )}

      {/* OVERLAY GRADIENT */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
    </section>
  );
};

export default VideoBackground;
