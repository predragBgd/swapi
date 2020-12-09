import React from "react"
import foto from "../foto/1200px-Star_Wars_Logo.svg.png"
import foto1 from "../foto/movies/220px-ReturnOfTheJediPoster1983.jpg"
import foto2 from "../foto/movies/220px-Star_Wars_-_Episode_II_Attack_of_the_Clones_(movie_poster).jpg"
import foto3 from "../foto/movies/220px-Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg"
import foto4 from "../foto/movies/220px-StarWarsMoviePoster1977.jpg"
import foto5 from "../foto/movies/ReturnOfTheJediPoster1983.jpg"
import foto6 from "../foto/movies/Star_Wars_Phantom_Menace_poster.jpg"
import foto7 from "../foto/movies/SW_-_Empire_Strikes_Back.jpg"

export const StarWars = () => {
    return(
        <div id="star-wars" className="row justify-content-center">
            <div id="star-wars-card"className="card">
                <div className="card-body">
                    <img src={foto} alt="Star Wars" style={{width: 150}} className="centar"/>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est ipsam labore minima nemo voluptates temporibus animi nostrum rem! Laborum error consectetur provident perspiciatis similique deleniti atque nulla, quidem blanditiis odio ea ipsum consequatur sequi voluptatum nemo accusantium cupiditate excepturi. Tempora corrupti molestiae ut, itaque, enim necessitatibus fugit incidunt tenetur, perferendis asperiores odio expedita voluptas eaque quo quisquam placeat vitae minus quia! Ex quis ab reprehenderit maiores? Vero architecto facilis harum! Enim recusandae veniam officia id nisi cupiditate, atque fugit!</p>
                </div>
                <div className="card-body">
                    <h5 className="card-title"><a href="/movies">Star Wars Movies</a></h5>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus est ipsam labore minima nemo voluptates temporibus animi nostrum rem! Laborum error consectetur provident perspiciatis similique deleniti atque nulla, quidem blanditiis odio ea ipsum consequatur sequi voluptatum nemo accusantium cupiditate excepturi.</p>
                </div>
                <div className="list-group list-group-horizontal">
                    <a href="/movie/1"><img src={foto1} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                    <a href="/movie/2"><img src={foto2} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                    <a href="/movie/3"><img src={foto3} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                    <a href="/movie/4"><img src={foto4} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                    <a href="/movie/5"><img src={foto5} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                    <a href="/movie/6"><img src={foto6} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                    <a href="/movie/7"><img src={foto7} alt="Star Wars" style={{width: 150, margin: 5}}></img></a>
                </div>
            </div> 
        </div>
    )
}