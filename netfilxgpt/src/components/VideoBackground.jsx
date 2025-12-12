import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";
import { Helmet } from "react-helmet";

const VideoBackground = ({ movieId }) => {
  // Prevent unnecessary hook call
  if (movieId) useTrailerVideos(movieId);

  const trailer = useSelector((store) => store.movies?.trailerVideo);
  if (!trailer) return null;

  const videoUrl =
    "https://www.youtube.com/embed/" +
    trailer.key +
    "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=" +
    trailer.key;

  // Avoid SSR crash
  const isAndroid =
    typeof navigator !== "undefined" &&
    /Android/i.test(navigator.userAgent);

  return (
    <>
      {/* SEO & Performance */}
      <Helmet>
        <title>Watching Trailer</title>

        {/* Preconnect for faster YouTube loading */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="description" content="Watch the latest movie trailer." />
      </Helmet>

      <div className="relative w-full h-screen md:h-screen overflow-hidden bg-black">
        {/* Mobile */}
        <div
          className={`md:hidden absolute inset-0 overflow-hidden ${
            isAndroid ? "top-[-13%]" : "top-0"
          }`}
        >
          <iframe
            title="Movie Trailer Mobile"
            src={videoUrl}
            loading="lazy"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
            className="absolute top-1/2 left-1/2 w-[180vw] h-[60vh]
                       -translate-x-1/2 -translate-y-1/2 object-cover scale-[1.8]
                       pointer-events-none"
          ></iframe>
        </div>

        {/* Desktop */}
        <div className="hidden md:block absolute inset-0">
          <iframe
            title="Movie Trailer Desktop"
            src={videoUrl}
            loading="lazy"
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
            className="absolute top-1/2 left-1/2 w-[150vw] h-[150vh]
                       -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
          ></iframe>
        </div>

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
      </div>
    </>
  );
};

export default VideoBackground;
