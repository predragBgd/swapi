import React, { useEffect, useState } from "react"
import { getSpecies } from "../resources/api"
import { speciesOpis } from "../resources/speciesOpis.js"

export const Species = () => {
    const [speciesApi, setSpeciesApi] = useState([])
    useEffect(() => {
        getSpecies().then((res) => {
            setSpeciesApi(res.data.results)
        })
    },[])
    let species = speciesApi.map((specie, index) => {
        return{
            ...specie,
            foto: speciesOpis[index].foto,
            opis: speciesOpis[index].opis,
            id: speciesOpis[index].id
        }
    })

    return(
        <div id="planets" className="row justify-content-center">
            <div id="planets-card"class="card">
                <div class="card-body">
                    <h5 class="card-title">Star Wars Species</h5>
                    <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel nostrum architecto reprehenderit dolorum magni! Accusantium odit ipsa sunt minima, hic, voluptate blanditiis ea ipsam facilis reprehenderit earum impedit nam temporibus veniam dicta error tempora dolore. Cumque maiores soluta excepturi enim deserunt. Ipsa saepe illo omnis reiciendis optio doloribus nesciunt harum.</p>
                </div>
            </div>
            {species.map((specie) => {
                return(
                    <div className="card" key={specie.name} style={{width: "16rem"}}>
                        <img src={specie.foto} class="card-img-top" alt="..."/>
                        <div className="card-body">
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#speciesModal" + specie.id}>{specie.name}
                            </button>
                            <div class="modal fade" id={"speciesModal" + specie.id} tabindex="-1"                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">{specie.name}</h5>
                                        </div>
                                        <div class="modal-body">
                                            <img src={specie.foto} class="card-img-top" alt="..."/>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Language: {specie.language}</li>
                                                <li className="list-group-item">Height: {specie.average_height}</li>
                                                <li className="list-group-item">Average lifespan: {specie.average_lifespan}</li>
                                                <li className="list-group-item">Average lifespan: {specie.average_lifespan}</li>
                                            </ul>
                                            <p>{specie.opis}</p>
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