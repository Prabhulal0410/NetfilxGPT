import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full z-0 mt-[-10px] md:mt-0 overflow-hidden">
      <VideoBackground movieId={mainMovie.id} />

      <div
        className="
    absolute 
    bottom-100 left-4
    md:bottom-64 md:left-20
    z-20 max-w-xl
  "
      >
        <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      </div>

      {/* FIXED SPACER */}
      <div className="h-60 md:h-40"></div>
    </div>
  );
};

export default MainContainer;
