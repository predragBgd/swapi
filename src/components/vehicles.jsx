import React, { useEffect, useState } from "react"
import { getVehicles } from "../resources/api"
import { vehiclesOpis } from "../resources/vehiclesOpis"

export const Vehicles = () => {
    const [vehiclesApi, setVehiclesApi] = useState([])
    useEffect(() =>{
        getVehicles().then((res) => {
            setVehiclesApi(res.data.results)
        })
    },[])

let vehicles = vehiclesApi.map((vehicle, index) => {
    return{
        ...vehicle,
        foto: vehiclesOpis[index].foto,
        opis: vehiclesOpis[index].opis,
        id: vehiclesOpis[index].id
    }
})
return(
    <div id="planets" className="row justify-content-center">
            <div id="planets-card"class="card">
                <div className="card-body">
                    <h5 className="card-title">Star Wars Vehicles</h5>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis neque quas saepe architecto ab velit ratione. Repellat delectus quo tempora nesciunt velit deleniti at ex eos vel odio quia exercitationem beatae officiis quae hic vitae quam perferendis unde, quis quisquam nisi facilis. Unde alias temporibus quo rem eos. Reiciendis eos.</p>
                </div>
            </div>
            {vehicles.map(vehicle => {
                return(
                    <div className="card" key={vehicle.name} style={{width: "16rem"}}>
                        <img src={vehicle.foto} class="card-img-top" alt="..."/>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#vehicleModal" + vehicle.id}>{vehicle.name}
                        </button>
                        <div className="modal fade" id={"vehicleModal" + vehicle.id} tabindex="-1"                          aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{vehicle.name}</h5>
                                        </div>
                                        <div className="modal-body">
                                            <img src={vehicle.foto} class="card-img-top" alt="..."/>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">Model: {vehicle.model}</li>
                                                <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                                                <li className="list-group-item">Crev: {vehicle.crev}</li>
                                                <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                                            </ul>
                                            <p>{vehicle.opis}</p>
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