import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMoviesById } from "../resources/api"

export const Movie = () => {
   const [movie, setMovie] = useState({})
   let {id} = useParams()
   useEffect(() => {
       getMoviesById(id).then((res) => {
           setMovie(res.data)
       })
   })
   return(
    <div className="card">
        <p>{movie.title}</p>
        <p>Director: {movie.director}</p>
        <p>Producer: {movie.producer}</p>
        <p>Relese date: {movie.release_date}</p>
        <p>{movie.opening_crawl}</p>

    </div>
   )
}