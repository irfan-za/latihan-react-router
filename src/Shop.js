import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    fetchMovies();
  }, []);
  const [items, setItems] = useState([]);
  const NamaFilmnya = "marvel";
  const fetchMovies = async () => {
    const data = await fetch(
      `http://www.omdbapi.com/?apikey=ab5e5f27&s=${NamaFilmnya}`
    );
    // .then((Response) => Response.json())
    // .then((c) => console.log(c));
    const item = await data.json();
    console.log(item);
    setItems(item.Search);
  };
  console.log(items);
  // https://fortnite-public-api.theapinetwork.com/prod09/items/list
  // http://www.omdbapi.com/?apikey=ab5e5f27&s=dilan
  return (
    <div>
      <h1>Ini Shop page</h1>
      <br />
      <h1>Daftar film {NamaFilmnya} :</h1>
      {
        // console.log(items.Search)
        items.map((m) => {
          return (
            <Link to={`/shop/${m.imdbID}`}>
              <h1 key={m.imdbID}>{m.Title}</h1>
            </Link>
          );
        })
      }
    </div>
  );
}

export default Shop;
