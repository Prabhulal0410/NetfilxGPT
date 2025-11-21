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
    <div className="relative w-full z-0 h-[80vh] md:h-[90vh] overflow-hidden">
      {/* ⭐ DESKTOP: autoplay trailer */}
      <div className="hidden md:block absolute inset-0">
        <VideoBackground movieId={mainMovie.id} />

        {/* ⭐ ADDED: BIG bottom gradient so movie lists become visible */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
      </div>

      {/* ⭐ MOBILE: full-screen hero poster */}
      <div className="block md:hidden absolute inset-0 z-10">
        <div className="relative w-screen h-[80vh] pt-10">
          <img
            src={imageUrl}
            className="w-full h-full object-cover"
            alt={mainMovie.title}
          />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

          {/* Bottom Content */}
          <div className="absolute bottom-6 left-4 right-4 text-white z-20">
            <p className="text-gray-300 text-sm mb-4">
              Romantic • Comedy • Drama • Action
            </p>

            <div className="flex gap-3">
              {/* Play Button */}
              <button
                className="flex-1 bg-white text-black py-2 rounded-md font-semibold flex items-center justify-center gap-2 
    cursor-pointer transition-all duration-200 hover:bg-gray-200"
              >
                ▶ Play
              </button>

              {/* My List Button */}
              <button
                className="flex-1 bg-white/20 text-white py-2 rounded-md border border-white/40 font-semibold flex items-center justify-center gap-2 
    cursor-pointer transition-all duration-200 hover:bg-white/30"
              >
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

      {/* ⭐ ADDED: Spacer so MovieList shows below video */}
      <div className="h-24 md:h-40"></div>
    </div>
  );
};

export default MainContainer;
