import React from "react";
import { NavLink } from "react-router-dom";
//
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <div className="">
      <Nav className="justify-content-around">
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
          }}
          className="nav-link"
        >
          <img
            src={process.env.PUBLIC_URL + "/img/logo.svg"}
            alt="Logo"
            className="img-fluid"
          />
        </NavLink>
        <NavLink
          to="/catalogo"
          activeStyle={{
            fontWeight: "bold",
          }}
          className="nav-link lh-lg"
        >
          <FontAwesomeIcon
            icon={faBicycle}
            fixedWidth
            className="d-inline-block me-1"
          />
          Catálogo
        </NavLink>
        <NavLink
          to="/alquiler"
          activeStyle={{
            fontWeight: "bold",
          }}
          className="nav-link lh-lg"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            fixedWidth
            className="d-inline-block me-1"
          />
          Alquiler
        </NavLink>
      </Nav>
    </div>
  );
};

export default Menu;
