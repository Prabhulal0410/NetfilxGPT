import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideos = (movieId) => {
  const dispatch = useDispatch();

  // Check if trailer already exists in Redux store
  const storedTrailer = useSelector(
    (store) => store.movies.trailerVideo[movieId]
  );

  const getMovieVideos = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await res.json();

    const trailerList = json.results.filter(
      (movie) => movie.type === "Trailer"
    );

    const trailer =
      trailerList.length > 0 ? trailerList[0] : json.results[0];

    dispatch(addTrailerVideo({ movieId, trailer }));
  };

  useEffect(() => {
    if (!storedTrailer) {
      getMovieVideos();
    }
  }, [movieId]);
};

export default useTrailerVideos;
