import React, { useContext } from "react";
import { flightParamsContext } from "../../routes/AppRouter";
import { Reservation } from "../../components/reservation/Reservation";
import "./Payment.scss";
import Swal from "sweetalert2";

export const Payment = () => {
  const { flightForm } = useContext(flightParamsContext);

  const infoDeparture = {
    date: flightForm.leave,
    travel: `${flightForm.origin} - ${flightForm.destination}`,
    tipoVuelo: "Salida",
  };
  const infoArrival = {
    date: flightForm.return,
    travel: `${flightForm.destination} - ${flightForm.origin}`,
    tipoVuelo: "Llegada",
  };

  const handleConfirma = () => {
    Swal.fire(
      "¡Buen trabajo!",
      "¡Muy bien, tu proceso de compra es un éxito!",
      "success"
    );
  };

  return (
    <div className="payment-cont">
      <div className="payment-info">
        <div className="personal-data">
          <h1 className="form-title">Información Personal</h1>
          <div className="each-inp">
            <label htmlFor="name">Nombre</label>
            <input id="name" type="text" />
          </div>
          <div className="each-inp">
            <label htmlFor="lastN">Apellido</label>
            <input id="lastN" type="text" />
          </div>
          <div className="each-inp">
            <label htmlFor="email">Correo</label>
            <input id="email" type="email" />
          </div>
          <div className="each-inp">
            <label htmlFor="phone">Teléfono/Celular</label>
            <input id="phone" type="text" />
          </div>
          <div className="each-inp">
            <label htmlFor="country">País</label>
            <input id="country" type="text" />
          </div>
          <div className="each-inp">
            <label htmlFor="code">Código Postal</label>
            <input id="code" type="text" />
          </div>
        </div>
        <div className="payment-data">
          <h1 className="form-title">Medio de Pago</h1>
          <div className="each-inp">
            <label htmlFor="card">N° de la Tarjeta</label>
            <input id="card" type="text" />
          </div>
          <div className="each-inp card-cad">
            <label htmlFor="cad">Fecha de caducidad</label>
            <input id="cad" type="text" placeholder="mm" />
            <span className="division">/</span>
            <input id="cad" type="text" placeholder="yy" />
            <label id="cad" htmlFor="csv">
              CSV
            </label>
            <input id="cad" type="text" placeholder="- - -" />
          </div>
          <div className="each-inp">
            <label htmlFor="cardN">Nombre en la tarjeta</label>
            <input id="cardN" type="text" />
          </div>
        </div>
        <button className="search" onClick={handleConfirma}>
          Confirmar Compra
        </button>
      </div>

      <div className="reservation-info">
        <Reservation
          infoFlightDeparture={infoDeparture}
          infoFlightArrival={infoArrival}
        />
      </div>
    </div>
  );
};
