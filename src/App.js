import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// as  di atas untuk me-rename (biar lbh singkat)
import Nav from "./Nav";
import Bibit from "./Bibit";
import Shop from "./Shop";
import Nama from "./Nama";
import FilmList from "./FilmList";

import "./App.css";

const Home = () => {
  const [nama, setNama] = useState("budy");
  function ChangeName() {
    if (nama === "budy") {
      setNama("Irfan");
      return;
    }
    setNama("budy");
  }

  return (
    <>
      <h1>Ini Home Page</h1>
      <Nama namanya={nama} />
      <button style={{ fontSize: "16px" }} onClick={ChangeName}>
        Change name
      </button>
    </>
  );
};
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="isi">
          <Switch>
            {/* switch agar dapat menjalankan satu route saja(agat tidak bisa menjalankan beberapa route scr bersamaan) */}
            <Route path="/" exact component={Home} />
            {/* exact untuk menjalankan componen yg ada di route jika url tepat '/' atau tidak ada tambahan lagi */}
            <Route path="/bibit" component={Bibit} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:imdbID" component={FilmList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
