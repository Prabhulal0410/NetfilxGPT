const VideoTitle = ({ title, overview }) => {
  
  return (
    <div className="max-w-xl">
      <h1 className="text-3xl md:text-6xl font-extrabold text-white drop-shadow-xl">
        {title}
      </h1>

      <p className="mt-3 hidden md:block text-[16px] text-gray-200 drop-shadow-xl">
        {overview}
      </p>

      <div className="mt-4 flex gap-4">
        <button
          className="bg-white text-black font-semibold px-4 md:px-8 py-2 rounded-md 
          hover:bg-gray-300 transition cursor-pointer"
        >
          ▶ Play
        </button>

        <button
          className="bg-gray-500/70 text-white font-semibold px-4 md:px-8 py-2 rounded-md 
          hover:bg-gray-400/70 transition cursor-pointer"
        >
          + My List
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
