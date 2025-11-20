import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies) 

  return (
    <div>
      <MovieList title={"Now playing"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer