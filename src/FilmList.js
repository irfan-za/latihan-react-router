import React, { useEffect } from "react";
import { useState } from "react";

function FilmList() {
  useEffect(() => {
    getDetail();
  }, []);
  const [films, setFilms] = useState([]);
  const getDetail = async () => {
    const fetchDetail = await fetch(
      `http://www.omdbapi.com/?apikey=ab5e5f27&s=attack-on-titan`
    );
    const film = await fetchDetail.json();
    setFilms(film.Search);
    console.log(film);
  };

  return (
    <div>
      <h1> Daftar film Attack On Titan:</h1>
      <br />
      {films.map((film) => {
        return (
          <div>
            <img src={film.Poster} alt="" />
            <h1>{film.Title}</h1>
            <h4>
              <strong>Tahun : </strong>
              {film.Year}
            </h4>
          </div>
        );
      })}
    </div>
  );
}

export default FilmList;
