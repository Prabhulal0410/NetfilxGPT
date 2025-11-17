import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 z-20">

      {/* Title */}
      <h1
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white max-w-3xl leading-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
        {title}
      </h1>

      {/* Overview */}
      <p
        className="mt-4 text-base md:text-xl lg:text-2xl text-white max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] line-clamp-3">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4">

        {/* Play Button */}
        <button
          className=" bg-white text-black font-semiboldpx-6 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 hover:bg-gray-200 transitionshadow-lg">
          <span className="text-xl">▶</span>
          Play
        </button>

        {/* More Info Button */}
        <button
          className="bg-gray-700/70 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 hover:bg-gray-600/80 transition shadow-lg">
          <span className="text-xl">ℹ</span>
          More Info
        </button>

      </div>
    </div>
  );
};

export default VideoTitle;
