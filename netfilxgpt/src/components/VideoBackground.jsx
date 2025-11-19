import { useSelector } from "react-redux";
import useTrailerVideos from "../hooks/useTrailerVideos";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useTrailerVideos(movieId);

  return (
      <div className="w-screen">
        <iframe
          className="w-screen aspect-video"
          src={
            "https://www.youtube.com/embed/" +
            trailerVideo?.key +
            "?autoplay=1&mute=1&controls=0&loop=1&playlist=" +
            trailerVideo?.key +
            "&modestbranding=1&showinfo=0&rel=0"
          }
          title="Netflix Background Trailer"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
  );
};

export default VideoBackground;

