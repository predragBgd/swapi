import React from "react"
import foto from "../foto/Star-Wars-Battlefront-2-Best-Deals-Lowest-Prices.jpg"
import foto2 from "../foto/1200px-Star_Wars_Logo.svg.png"
export const Home = () => {
    return(
        <div id="sw-home">
            <img src={foto} alt="Star Wars" className="centar"/>
            <a href="/star-wars"><img src={foto2} alt="Star Wars" style={{width: 150}} className="centar"/></a>
        </div>
    )
}