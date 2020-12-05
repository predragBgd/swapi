import React from "react"

export const Header = () => {
    return(
        <nav className="nav justify-content-end">
            <a className="nav-link" href="/planets">Planets</a>
            <a className="nav-link" href="/starships">Starships</a>
            <a className="nav-link" href="/">Species</a>
            <a className="nav-link" href="/">Characters</a>
            <a className="nav-link" href="/">Vehicles</a>
            <a className="nav-link" href="/">Movies</a>
        </nav>
    )
}