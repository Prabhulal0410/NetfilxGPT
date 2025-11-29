import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full z-0 mt-[-10px] md:mt-0 overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND (Mobile + Desktop) */}
      <VideoBackground movieId={mainMovie.id} />

      {/* 🎬 TITLE + BUTTONS (Mobile + Desktop Responsive) */}
      <div className="absolute bottom-68 left-4 md:left-20 z-20 max-w-xl">
        <VideoTitle 
          title={mainMovie.title} 
          overview={mainMovie.overview} 
        />
      </div>

      {/* Spacer so movie list appears below video */}
      <div className="h-24 md:h-40"></div>
    </div>
  );
};

export default MainContainer;
