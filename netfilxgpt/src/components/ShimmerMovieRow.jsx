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
                bg-[#1a1a1a]
              "
            >
              {/* Dark base layer */}
              <div className="absolute inset-0 bg-[#1a1a1a]"></div>

              {/* Glossy shimmer effect */}
              <div className="
                absolute inset-0 
                animate-[shimmer_1.5s_infinite]
                bg-linear-to-r 
                from-transparent via-[rgba(255,255,255,0.08)] to-transparent
              "></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShimmerMovieRow;
