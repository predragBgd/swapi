import React, { useEffect, useState } from "react"
import { getMovies } from "../resources/api"
import { moviesOpis } from "../resources/moviesOpis"


export const Movies = () => {
    const [moviesApi, setMoviesApi] = useState([])
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
        <div id="moviess" className="row justify-content-center">
                <div id="movies-card"class="card">
                    <div className="card-body">
                        <h5 className="card-title">Star Wars Movies</h5>
                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi fugit reprehenderit alias mollitia accusamus dolores voluptatum temporibus quisquam illum, porro, doloremque laudantium sapiente vitae eaque officiis. Officiis deserunt necessitatibus placeat, nobis fugiat expedita explicabo quas voluptate aut, voluptas ea modi labore saepe iste consectetur architecto nisi. Ipsa quos nostrum mollitia atque suscipit exercitationem. Vitae ullam recusandae optio excepturi ad asperiores.</p>
                    </div>
                </div>
            {movies.map((movie) => {
            return(
                    <div className="card" key={movie.name} style={{width: "16rem"}}>
                        <img className="card-img-top" src={movie.foto} alt={movie.name}/>
                        <a href={"/movie/" + movie.id}>{movie.title}
                        </a>
                        <p>{movie.director}</p>
                    </div>
                )  
            })}
        </div>
    )
}