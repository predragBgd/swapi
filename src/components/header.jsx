import React from "react"

export const Header = () => {
    return(
        <nav className="nav justify-content-end">
            <a className="nav-link" href="/">Star Wars</a>
            <a className="nav-link" href="/planets">Planets</a>
            <a className="nav-link" href="/starships">Starships</a>
            <a className="nav-link" href="/species">Species</a>
            <a className="nav-link" href="/characters">Characters</a>
            <a className="nav-link" href="/vehicles">Vehicles</a>
            <a className="nav-link" href="/movies">Movies</a>
        </nav>
    )
}