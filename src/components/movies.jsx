import React, { useEffect, useState } from "react"
import { getMovies } from "../resources/api"
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { moviesOpis } from "../resources/moviesOpis"


export const Movies = () => {
    const [moviesApi, setMoviesApi] = useState([])

    const extractId =(url) => {
        let url2 = []
        url.split("").forEach((el) => {
            if(el > 0 || el < 9) {
                url.push(el)
            }
        })
        return url2
    }
    useEffect(() => {
        getMovies().then((res) => {
            setMoviesApi(res.data.results)
        })
    },[])
    let movies = moviesApi.map((movies, index) => {
        return{
            ...movies,
            foto: moviesOpis[index].foto,
            opis: moviesOpis[index].opis,
            id: moviesOpis[index].id
        }
    })
    return(

        movies.map((movie) => {
          return(
              <div className="card" key={movie.title}>
                  <p>{movie.title}</p>
                  <img className="card-img-top" src={movie.foto} alt={movie.name}/>
                  <Link to={`/movie/${extractId(movie.url)}`}>
                    <hr />
                    <button type="button" className="btn btn-primary">
                    Information:
                    </button>
                </Link>
                <hr />
              </div>
          )  
        })
    )
}