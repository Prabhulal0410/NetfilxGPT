import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import { useEffect } from "react";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // ⭐ Dynamic SEO for this page
  useEffect(() => {
    document.title = "Browse Movies – NetflixGPT (AI Movie Finder)";
    
    const metaDesc = document.querySelector("meta[name='description']");
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Browse trending, popular, top-rated, and upcoming movies with NetflixGPT's AI-powered discovery experience."
      );
    }
  }, []);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="relative bg-black min-h-screen">
      <Header />

      {/* ⭐ SEO: H1 (hidden but required for Google) */}
      <h1 className="text-white text-3xl font-bold hidden">
        Browse Movies – NetflixGPT AI Movie Finder
      </h1>

      {/* ⭐ SEO: Internal navigation links (hidden, improves ranking) */}
      <nav className="hidden">
        <a href="/browse">Browse</a>
        <a href="/gpt-search">GPT Movie Search</a>
        <a href="/trending">Trending Movies</a>
        <a href="/popular">Popular Movies</a>
      </nav>

      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          {/* ⭐ SEO: Add H2 for structure */}
          <h2 className="hidden text-white text-2xl font-semibold">
            Now Playing Movies
          </h2>
          <MainContainer />

          <h2 className="hidden text-white text-2xl font-semibold mt-4">
            Movie Categories
          </h2>
          <SecondaryContainer />
        </>
      )}

      <Footer />
    </div>
  );
};

export default Browse;
