import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const imageUrl =
    "https://image.tmdb.org/t/p/original" + mainMovie.backdrop_path;

  return (
    <div className="relative w-full">
      {/* ⭐ DESKTOP: autoplay trailer */}
      <div className="hidden md:block">
        <VideoBackground movieId={mainMovie.id} />
      </div>

      {/* ⭐ MOBILE: full-screen hero poster */}
      <div className="block md:hidden">
        <div className="relative w-screen h-[80vh] overflow-hidden">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt={mainMovie.title}
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          {/* Bottom Content */}
          <div className="absolute bottom-6 left-4 right-4 text-white">
            <p className="text-gray-300 text-sm mb-4">
              Romantic • Comedy • Drama • Action
            </p>

            <div className="flex gap-3">
              <button className="flex-1 bg-white text-black py-2 rounded-md font-semibold flex items-center justify-center gap-2">
                ▶ Play
              </button>

              <button className="flex-1 bg-white/20 text-white py-2 rounded-md border border-white/40 font-semibold flex items-center justify-center gap-2">
                + My List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐ DESKTOP TITLE OVERLAY */}
      <div className="hidden md:block">
        <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      </div>
    </div>
  );
};

export default MainContainer;
