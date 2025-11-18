import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

const VideoBackground = ({movieId}) => {

  const dispatch = useDispatch()
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo)

  const getMovieVideos = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
    const json = await res.json()
    console.log(json.results)
    const filterTrailer = json.results.filter(movie => movie.type === "Trailer")
    const trailer = filterTrailer.length == 0 ? filterTrailer[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))
    console.log(trailer)
  }
  useEffect(()=>{
    getMovieVideos()
  },[movieId])

  return (
    <div>
      <iframe width="560" height="315" 
        src={"https://www.youtube.com/embed/"+ trailerVideo?.key}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
        </iframe>
    </div>
  )
}

export default VideoBackground