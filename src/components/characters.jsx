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
        <div id="planets" className="row justify-content-center">
            <div id="planets-card"class="card">
                <div class="card-body">
                    <h5 class="card-title">Star Wars Characters</h5>
                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut est, optio illum facere dolore temporibus eligendi laborum ea voluptas ducimus distinctio, minima, ullam omnis. Asperiores ex iste expedita eius, deserunt dolor. Ut omnis provident, consequatur blanditiis voluptatum quisquam modi similique cumque commodi, beatae voluptates atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio pariatur ea illo temporibus dignissimos cupiditate unde maxime, doloremque nemo qui nihil repudiandae, explicabo excepturi beatae itaque nostrum. Laboriosam, nisi ut.</p>
                </div>
            </div>
            {characters.map(character => {
                return(
                    <div className="card" key={character.name} style={{width: "16rem"}}>
                        <img src={character.foto} class="card-img-top" alt="..."/>
                    </div>
                )
            })}
        </div>
    )
}