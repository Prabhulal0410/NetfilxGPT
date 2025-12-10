import React from "react";

const ShimmerMovieRow = () => {
  return (
    <div className="pl-1 md:pl-14">
      {/* Horizontal Shimmer Cards */}
      <div className="flex gap-3 overflow-x-scroll no-scrollbar pb-3 flex-nowrap">
        {Array(8)
          .fill("")
          .map((_, i) => (
            <div
              key={i}
              className="
                shrink-0 
                w-[150px] h-[225px] md:w-[165px] md:h-[250px]
                rounded-md overflow-hidden 
                relative
                bg-gray-800/80   /* Darker base */
              "
            >
              {/* Base layer */}
              <div className="absolute inset-0 bg-linear-to-b from-gray-800/80 via-gray-900/90 to-black/95"></div>

              {/* Shimmer effect */}
              <div
                className="
                  absolute inset-0 
                  animate-[shimmer_1.5s_infinite]
                  bg-linear-to-r 
                  from-transparent via-gray-600/30 to-transparent
                "
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            </div>
          ))}
      </div>

      {/* Shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerMovieRow;

