import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMoviesById } from "../resources/api";

export const Movie = () => {
  const [movieApi, setMovieApi] = useState({});
  let { id } = useParams();
  useEffect(() => {
    getMoviesById(id).then((res) => {
      setMovieApi(res.data);
    });
  });

  return (
    <div id="movie" className="card">
        <p>{movieApi.title}</p>
        <p>Director: {movieApi.director}</p>
        <p>Producer: {movieApi.producer}</p>
        <p>Relese date: {movieApi.release_date}</p>
        <p>{movieApi.opening_crawl}</p>
    </div>
  );
};
