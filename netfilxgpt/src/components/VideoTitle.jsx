const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-[42%] left-10 md:left-20 z-20 max-w-xl">
      <h1 className="text-2xl md:text-6xl font-extrabold text-white drop-shadow-xl">
        {title}
      </h1>

      <p className="mt-3 hidden md:block text-[16px] text-gray-200 drop-shadow-xl max-w-xl">
        {overview}
      </p>

      <div className="mt-4 flex gap-4">
        {/* Play Button */}
        <button
          className="bg-white text-black font-semibold px-6 md:px-8 py-2 rounded-md flex items-center gap-2
          cursor-pointer transition-all duration-200 hover:bg-gray-300"
        >
          ▶ Play
        </button>

        {/* My List */}
        <button
          className="bg-gray-500/70 text-white font-semibold px-6 md:px-8 py-2 rounded-md flex items-center gap-2
          cursor-pointer transition-all duration-200 hover:bg-gray-400/70"
        >
          + My List
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
