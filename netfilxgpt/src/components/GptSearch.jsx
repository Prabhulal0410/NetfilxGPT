import React from "react";
import GptSearchBar from "./GptSearchBar";

const GPTsearch = () => {
  return (
    <div
      className="w-full min-h-screen"
      aria-label="AI powered movie recommendation search page"
      role="main"
    >
      {/* SEO: Main content for search engine crawlers */}
      <GptSearchBar />
    </div>
  );
};

export default GPTsearch;
