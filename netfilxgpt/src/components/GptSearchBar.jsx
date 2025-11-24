import React, { useState } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import { model } from "../utils/gemini"; // IMPORT MODEL

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [movies, setMovies] = useState([]); // 👉 ARRAY STATE

  // Handle search
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
      const text = res.response.text().trim();

      setResult(text);

      // 👉 Convert text to array & clean whitespace
      const movieArray = text
        .split(",")
        .map((m) => m.trim())
        .filter((m) => m.length > 0);

      setMovies(movieArray);

      console.log("Movie Array:", movieArray);

    } catch (err) {
      console.error("Gemini API Error:", err);
      setResult("Something went wrong.");
    }
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center">

      {/* Background Image */}
      <img
        src="/loginpagebg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80"></div>

      {/* Search Bar */}
      <div className="relative z-10 w-full px-4 flex justify-center">
        <form className="flex w-full max-w-2xl" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="flex-grow bg-black/60 text-white placeholder-gray-400 px-4 py-3 rounded-l-md focus:outline-none border border-gray-700 focus:border-white backdrop-blur-sm"
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
      </div>

      {/* Result Display */}
      {result && (
        <div className="relative z-10 mt-6 bg-black/60 text-white p-4 rounded-md backdrop-blur-sm max-w-xl">
          <h3 className="font-bold mt-4">Recommended Movies (Array):</h3>
          <pre>{JSON.stringify(movies, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GptSearchBar;
