
const ShimmerMovieRow = () => {
  return (
    <div className="pl-1 md:pl-14">
      {/* Title Shimmer */}
      <div className="h-5 w-40 bg-gray-700/50 rounded-md mb-3 animate-pulse"></div>

      {/* Horizontal Shimmer Cards */}
      <div className="flex gap-3 overflow-x-scroll no-scrollbar pb-3 flex-nowrap">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[150px] h-[225px] md:w-[165px] md:h-[250px]
                         rounded-md bg-gray-800/40 animate-pulse"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMovieRow;
