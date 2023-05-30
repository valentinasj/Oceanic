import React from "react";
import logo from "../../assets/Logo.jpg";
import "./NavBar.scss";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/Home");
  };
  const handlePagos = () => {
    navigate("/pagos");
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <figure onClick={handleHome}>
          <img src={logo} alt="" />
        </figure>
        <p>Reserva</p>
        <p>Tu viaje</p>
        <p>Check-in</p>
        <p>Rastrear vuelo</p>
        <p onClick={handlePagos}>Oceanic Rewards</p>
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
