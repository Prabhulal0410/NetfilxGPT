import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideos = (movieId) => {
  //fetch trailer video
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const res = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos",API_OPTIONS);
    const json = await res.json();

    const filterTrailer = json.results.filter((movie) => movie.type === "Trailer");
    const trailer = filterTrailer.length > 0 ? filterTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));

  };
  useEffect(() => {
    getMovieVideos();
  }, [movieId]);
};

export default useTrailerVideos;
