import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  const linkStyle = {
    color: "lightblue",
    fontWeight: "bold",
    textDecoration: "none",
  };
  return (
    <nav>
      <h2>INI Logo</h2>
      <ul className="navlink">
        <Link style={linkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to="/bibit">
          <li>Bibit</li>
        </Link>
        <Link style={linkStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={linkStyle} to="/shop/:id">
          <li>Film List</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
