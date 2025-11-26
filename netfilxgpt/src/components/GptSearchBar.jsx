import React, { useState } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieresult } from "../utils/searchSlice";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!input) return;

    const query = `
      Act as a movie recommendation system.
      Suggest some movies for the query: "${input}"
      Only give exactly 5 movies.
      Only comma-separated values.
      Example format: hello,ninja,harry potter,black,dark
    `;

    try {
      const res = await model.generateContent(query);
      const movienames = res.response.text().trim();

      const movieArray = movienames
        .split(",")
        .map((m) => m.trim())
        .filter((m) => m.length > 0);

      const promiseArray = movieArray.map((movie) => searchMovieTmdb(movie));
      const tmdbresult = await Promise.all(promiseArray);

      dispatch(
        addGptMovieresult({ movieNames: movieArray, movieResult: tmdbresult })
      );
    } catch (err) {
      console.error("Gemini API Error:", err);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      {/* Background Image */}
      <img
        src="/loginpagebg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>

      {/* Content Layer */}
      <div className="relative z-20 w-full flex flex-col items-center mt-40">
        {/* 🔍 Search Bar */}
        <form className="flex w-full max-w-2xl" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="flex-grow bg-black/60 text-white px-4 py-3 rounded-l-md border border-gray-600 focus:outline-none focus:border-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="bg-red-600 px-6 py-3 text-white font-semibold rounded-r-md hover:bg-red-700 transition duration-200"
            type="submit"
          >
            {lang[langKey].search}
          </button>
        </form>

        {/* 🎬 GPT Movie Suggestions */}
        <div className="w-full px-6 mt-10">
          <GptMovieSuggestion />
        </div>
      </div>
    </div>
  );
};

export default GptSearchBar;
