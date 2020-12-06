import axios from "axios"

export const getPlanets = () => {
    return axios.get("https://swapi.dev/api/planets/")
}
export const getCharacters = () => {
    return axios.get("https://swapi.dev/api/people/")
}
export const getStarships = () => {
    return axios.get("https://swapi.dev/api/starships/")
}
export const getSpecies = () => {
    return axios.get("https://swapi.dev/api/species/")
}
export const getVehicles = () => {
    return axios.get("https://swapi.dev/api/vehicles/")
}
export const getMovies = () => {
    return axios.get("https://swapi.dev/api/films/")
}
export const getMoviesById = (id) => {
    return axios.get("https://swapi.dev/api/films/" + id)
}
