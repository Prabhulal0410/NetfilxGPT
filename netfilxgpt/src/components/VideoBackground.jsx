import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {

  const getMovieVideos = async() => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
    const json = await res.json()
    console.log(json.results)
  }
  useEffect(()=>{
    getMovieVideos()
  },[movieId])

  return (
    <div>VideoBackground</div>
  )
}

export default VideoBackground