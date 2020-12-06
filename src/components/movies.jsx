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
        <div id="planets" className="row justify-content-center">
                <div id="planets-card"class="card">
                    <div class="card-body">
                        <h5 class="card-title">Star Wars Movies</h5>
                        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi fugit reprehenderit alias mollitia accusamus dolores voluptatum temporibus quisquam illum, porro, doloremque laudantium sapiente vitae eaque officiis. Officiis deserunt necessitatibus placeat, nobis fugiat expedita explicabo quas voluptate aut, voluptas ea modi labore saepe iste consectetur architecto nisi. Ipsa quos nostrum mollitia atque suscipit exercitationem. Vitae ullam recusandae optio excepturi ad asperiores.</p>
                    </div>
                </div>
            {movies.map((movie) => {
            return(
                    <div className="card" key={movie.name} style={{width: "16rem"}}>
                        <img className="card-img-top" src={movie.foto} alt={movie.name}/>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#muvieModal" + movie.id}>{movie.title}
                        </button>
                        <hr />
                    </div>
                )  
            })}
        </div>
    )
}