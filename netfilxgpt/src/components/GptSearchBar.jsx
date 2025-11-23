import React from 'react'
import lang from "../utils/languageConstant"
import { useSelector } from 'react-redux'

const GptSearchBar = () => {

  const langKey = useSelector((store)=>store.config.lang)

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">

      {/* Background Image */}
      <img
        src="/loginpagebg.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80"></div>

      {/* Search Bar Container */}
      <div className="relative z-10 w-full px-4 flex justify-center">
        <form className="flex w-full max-w-2xl">

          {/* Input */}
          <input
            type="text"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="flex-grow bg-black/60 text-white placeholder-gray-400 px-4 py-3 rounded-l-md focus:outline-none border border-gray-700 focus:border-white backdrop-blur-sm"
          />

          {/* Button */}
          <button
            className="bg-red-600 px-6 py-3 text-white font-semibold rounded-r-md  hover:bg-red-700 transition duration-200"
          >
            {lang[langKey].search}
          </button>
        </form>
      </div>

    </div>
  )
}

export default GptSearchBar
