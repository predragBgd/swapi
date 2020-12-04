import React, { useEffect, useState } from "react"
import { getStarships } from "../resources/api"
import { starshipsOpis } from "../resources/starshipsOpis.js"

export const Starships = () => {
    const [starshipsApi, setStarshipsApi] = useState([])
    useEffect(() => {
        getStarships().then((res) => {
            setStarshipsApi(res.data.results)
        })
    },[])
    let starships = starshipsApi.map((starship, index) => {
        return{
            ...starship,
            foto: starshipsOpis[index].foto,
            opis: starshipsOpis[index].opis,
            id: starshipsOpis[index].id
        }
    })
    return(
        <div id="planets" className="row justify-content-center">
            <div id="planets-card"class="card">
                <div class="card-body">
                    <h5 class="card-title">Star Wars Starships</h5>
                    <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio, in iusto. Consequuntur aspernatur laborum a atque expedita perspiciatis iste commodi eius, veritatis laudantium id nostrum voluptates placeat error esse quam beatae porro quas. Ad, aliquid natus consequuntur exercitationem qui provident, dolores porro a perferendis suscipit facere consectetur ipsam atque necessitatibus quaerat error laboriosam! Pariatur, consequuntur. Repellat consequatur placeat accusantium earum.</p>
                </div>
            </div>    
        {starships.map((starship) => {
            return(
                <div className="card" key={starship.name} style={{width: "16rem"}}>
                    <img src={starship.foto} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#starshipModal" + starship.id}>{starship.name}
                        </button>
                        <div class="modal fade" id={"starshipModal" + starship.id} tabindex="-1"                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{starship.name}</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <img src={starship.foto} class="card-img-top" alt="..."/>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">Model: {starship.model}.</li>
                                            <li className="list-group-item">Crew: {starship.crew}.</li>
                                            <li className="list-group-item">Manufacturer: {starship.manufacturer} days.</li>
                                        </ul>
                                        <p>{starship.opis}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                      
            )   

        })}
        
        </div>
    )
}
