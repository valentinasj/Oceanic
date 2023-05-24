import React from "react";
import logo from "../../assets/Logo.jpg";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <figure>
          <img src={logo} alt="" />
        </figure>
        <p>Reserva</p>
        <p>Tu viaje</p>
        <p>Check-in</p>
        <p>Rastrear vuelo</p>
        <p>Oceanic Rewards</p>
      </div>
      <div className="nav__languages">
        <p>Promociones</p>
        <p>Idioma</p>
        <p>ES</p>
        <p>EN</p>
      </div>
    </nav>
  );
};
