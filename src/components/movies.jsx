import React, { useEffect, useState } from "react"
import { getMovies } from "../resources/api"


export const Movies = () => {
    const [movies, setMovies] = useState([])

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
            setMovies(res.data.results)
        })
    },[])
    
}