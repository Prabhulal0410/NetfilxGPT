import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[30%] md:top-[35%] left-0 px-6 md:px-12 lg:px-24 z-20 max-w-2xl">

      {/* Title */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
        {title}
      </h1>

      {/* Overview */}
      <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-200 leading-relaxed line-clamp-3 drop-shadow-xl">
        {overview}
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-3">
        <button className="bg-white text-black font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 hover:bg-gray-300 transition">
          <span className="text-xl">▶</span> Play
        </button>

        <button className="bg-gray-600/70 text-white font-semibold px-6 md:px-8 py-2 md:py-3 rounded-md flex items-center gap-2 hover:bg-gray-500 transition">
          <span className="text-xl">ℹ</span> More Info
        </button>
      </div>

    </div>
  );
};

export default VideoTitle;
