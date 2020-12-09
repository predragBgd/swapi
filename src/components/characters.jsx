import React, { useEffect, useState } from "react"
import { getCharacters } from "../resources/api"
import { charactersOpis } from "../resources/charactersOpis"

export const Characters = () => {
    const [charactersApi, setCharactersApi] = useState([])
    useEffect(() => {
        getCharacters().then((res) => {
            setCharactersApi(res.data.results)
        })
    },[])
    let characters = charactersApi.map((caracter, index) => {
        return{
            ...caracter,
            foto: charactersOpis[index].foto,
            opis: charactersOpis[index].opis,
            id: charactersOpis[index].id
        }
    })
    return(
        <div id="characters" className="row justify-content-center">
            <div id="characters-card"className="card">
                <div className="card-body">
                    <h5 className="card-title">Star Wars Characters</h5>
                    <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut est, optio illum facere dolore temporibus eligendi laborum ea voluptas ducimus distinctio, minima, ullam omnis. Asperiores ex iste expedita eius, deserunt dolor. Ut omnis provident, consequatur blanditiis voluptatum quisquam modi similique cumque commodi, beatae voluptates atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio pariatur ea illo temporibus dignissimos cupiditate unde maxime, doloremque nemo qui nihil repudiandae, explicabo excepturi beatae itaque nostrum. Laboriosam, nisi ut.</p>
                </div>
            </div>
            {characters.map(character => {
                return(
                    <div className="card" key={character.name} style={{width: "16rem"}}>
                        <img src={character.foto} class="card-img-top" alt="..."/>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target={"#characterModal" + character.id}>{character.name}
                        </button>
                        <div className="modal fade" id={"characterModal" + character.id} tabindex="-1"                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{character.name}</h5>
                                        </div>
                                        <div className="modal-body">
                                            <img src={character.foto} class="card-img-top" alt="..."/>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Gender: {character.gender}</li>
                                                <li className="list-group-item">Height: {character.height} cm</li>
                                                <li className="list-group-item">Mass: {character.mass} kg</li>
                                            </ul>
                                            <p className="card-p">{character.opis}</p>
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