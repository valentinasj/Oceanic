import React, { useContext } from "react";
import { Reservation } from "../../components/reservation/Reservation";
import { flightParamsContext } from "../../routes/AppRouter";
import { useNavigate } from "react-router-dom";
import "./SeatSelection.scss";
import Swal from "sweetalert2";
import { SelectionSeatsCont } from "../../components/selectionSeatsCont/SelectionSeatsCont";

export const SeatSelection = () => {
  const navigate = useNavigate();

  const { flightForm, numberSeatsDeparture, numberSeatsArrival } =
    useContext(flightParamsContext);

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

  const numPassengers = flightForm.passengers;

  const suma = numPassengers
    .map((pasajero) => {
      if (pasajero === "") {
        return 0;
      }
      return parseInt(pasajero.charAt(0));
    })
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);

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
    <div className="main">
      <section className="containerSelectionSeats">
        <SelectionSeatsCont infoFlight={infoDeparture} isDeparture={true} />
        <SelectionSeatsCont infoFlight={infoArrival} isDeparture={false} />
      </section>
      <section className="containerReservation">
        <Reservation
          infoFlightDeparture={infoDeparture}
          infoFlightArrival={infoArrival}
        />
        <button
          className={`${
            numberSeatsDeparture + numberSeatsArrival === 2 * suma
              ? "continuePaymentPage"
              : "displayNone"
          }`}
          onClick={handleContinue}
        >
          Pagar con Paypal
        </button>
      </section>
    </div>
  );
};
