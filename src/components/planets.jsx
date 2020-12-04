import React, { useEffect, useState } from "react"
import { getPlanets } from "../resources/api"
import { planetsOpis } from "../resources/planetsOpis.js"

export const Planets = () => {
    const [planetsApi, setPlanetsApi] = useState([])
    useEffect(() => {
        getPlanets().then((res) => {
            setPlanetsApi(res.data.results)
        })
    },[])
    let planets = planetsApi.map((planet, index) => {
        return{
            ...planet,
            foto: planetsOpis[index].foto,
            opis: planetsOpis[index].opis,
            id: planetsOpis[index].id,
        }
    })
    return(
        <div id="planets" className="row justify-content-center">
            <div id="planets-card"class="card">
                <div class="card-body">
                    <h5 class="card-title">Star Wars Planets</h5>
                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed ab, optio consectetur laudantium consequatur voluptatum, iure quidem quos reiciendis veritatis rerum velit quis ipsam totam nostrum saepe iste illo esse! Alias voluptatum distinctio harum enim, praesentium temporibus vero expedita mollitia.</p>
                </div>
            </div>    
        {planets.map((planet) => {
            return(
                <div className="card" key={planet.name} style={{width: "16rem"}}>
                    <img src={planet.foto} class="card-img-top" alt="..."/>
                        <div className="card-body">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#planetModal" + planet.id}>{planet.name}
                                </button>
                                <div class="modal fade" id={"planetModal" + planet.id} tabindex="-1"                   aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">{planet.name}</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                                <div class="modal-body">
                                                    <img src={planet.foto} class="card-img-top" alt="..."/>
                                                    <ul className="list-group list-group-flush">
                                                        <li className="list-group-item">Terrain: {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}.</li>
                                                        <li className="list-group-item">Orbital period: {planet.orbital_period} days.</li>
                                                        <li className="list-group-item">Gravity: {planet.gravity}.</li>
                                                        <li className="list-group-item">Population: {planet.population}.</li>
                                                    </ul>
                                                    <p>{planet.opis}</p>
                                                </div>
                                        </div>
                                        {/* <div className="collapse" id={"planet"+planet.id}>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Terrain: {planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1)}.</li>
                                                <li className="list-group-item">Orbital period: {planet.orbital_period} days.</li>
                                                <li className="list-group-item">Gravity: {planet.gravity}.</li>
                                                <li className="list-group-item">Population: {planet.population}.</li>
                                            </ul>
                                            <p>{planet.opis}</p>
                                        </div> */}
                                    </div>
                                </div>
                        </div>
                </div>                      
            )   

        })}
        
        </div>
    )
}
