import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestion = () => {

  const {movieResult,movieNames} = useSelector((store)=>store.search)

  if(!movieNames) return null

  return (
    <>
      
    </>
  )
}

export default GptMovieSuggestion