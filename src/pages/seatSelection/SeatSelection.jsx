import React, { useContext } from "react";
import { Reservation } from "../../components/reservation/Reservation";
import { flightParamsContext } from "../../routes/AppRouter";
import { useNavigate } from "react-router-dom";
import "./SeatSelection.scss";
import Swal from "sweetalert2";

export const SeatSelection = () => {
  const navigate = useNavigate();
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

  const handleContinue = () => {
    Swal.fire(
      "Good job!",
      "Muy bien, ahora vamos a la sección de pagos!",
      "success"
    ).then(() => {
      navigate("/pagos");
    });
  };

  return (
    <div>
      <h1>SeatSelection</h1>
      <div className="containerReservation">
        <Reservation
          infoFlightDeparture={infoDeparture}
          infoFlightArrival={infoArrival}
        />
        <button className="continuePaymentPage" onClick={handleContinue}>
          Pagar con Paypal
        </button>
      </div>
    </div>
  );
};
