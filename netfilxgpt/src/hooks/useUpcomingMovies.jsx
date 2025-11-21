import { useEffect } from "react";
import { addPopularMovies, addTopRatedMovies, addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const useUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    useUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
