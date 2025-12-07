import React, { useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieresult } from "../utils/searchSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";
import ShimmerMovieRow from "./ShimmerMovieRow";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer " + import.meta.env.VITE_TMDB_KEY,
        },
      }
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input) return;

    setLoading(true);

    try {
      const query = `
        Act as a movie recommendation system.
        Suggest exactly 5 movies for the query: "${input}".
        Output should be comma-separated movie names ONLY. No numbering.
      `;

      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: query }),
      });

      const data = await response.json();

      if (!data.text || typeof data.text !== "string") {
        console.error("Invalid Gemini Response:", data);
        setLoading(false);
        return;
      }

      const movienames = data.text
        .trim()
        .split(",")
        .map((m) => m.trim())
        .filter((m) => m.length > 0);

      const promiseArray = movienames.map((movie) => searchMovieTmdb(movie));
      const tmdbresult = await Promise.all(promiseArray);

      dispatch(
        addGptMovieresult({
          movieNames: movienames,
          movieResult: tmdbresult,
        })
      );
    } catch (err) {
      console.error("Gemini API Error:", err);
    }

    setInput("");
    setLoading(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      <img
        src="/loginpagebg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/10 to-black/5"></div>

      <div className="relative z-20 w-full flex flex-col items-center mt-48">
        <form className="flex w-full max-w-2xl px-4" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="grow bg-black/80 text-white px-4 py-3 rounded-l-md border border-gray-600 focus:outline-none focus:border-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="bg-red-600 px-8 py-3 text-white font-semibold rounded-r-md hover:bg-red-700 transition duration-200 cursor-pointer"
            type="submit"
          >
            {lang[langKey].search}
          </button>
        </form>

        <div className="w-full px-6 mt-10">
          {loading ? (
            <>
              <ShimmerMovieRow />
              <ShimmerMovieRow />
            </>
          ) : (
            <GptMovieSuggestion />
          )}
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
