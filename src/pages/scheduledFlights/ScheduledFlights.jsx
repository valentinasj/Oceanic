import React, { useContext } from "react";
import "./ScheduledFlights.scss";
import { FlightCard } from "../../components/flightCard/FlightCard";
import { Reservation } from "../../components/reservation/Reservation";
import { flightParamsContext } from "../../routes/AppRouter";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ScheduledFlights = () => {
  const navigate = useNavigate();

  const {
    flightForm,
    selectionBaggages,
    priceBaggagesSelected,
    hoursFlightDeparture,
  } = useContext(flightParamsContext);

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

  const handleBack = () => {
    navigate("/Home");
  };

  const handleContinue = () => {
    Swal.fire("Good job!", "Vamos a seleccionar asientos.!", "success").then(
      () => {
        sessionStorage.setItem(
          "priceBaggagesSelected",
          JSON.stringify(priceBaggagesSelected)
        );
        sessionStorage.setItem(
          "hoursFlightDeparture",
          JSON.stringify(hoursFlightDeparture)
        );
        navigate("/seleccionarAsientos");
      }
    );
  };

  return (
    <div className="scheduleFlights">
      {flightForm.leave.length === 0 ? (
        <>
          <p>No se ha seleccionado vuelo.</p>
          <button
            className="departureFlight__changeFlight"
            onClick={handleBack}
          >
            Seleccionar vuelo
          </button>
        </>
      ) : (
        <>
          <div className="departureAndReservation">
            <FlightCard infoFlight={infoDeparture} />
            <FlightCard infoFlight={infoArrival} />
          </div>
          <div className="containerReservation">
            <Reservation
              infoFlightDeparture={infoDeparture}
              infoFlightArrival={infoArrival}
            />
            <button
              className={`${
                selectionBaggages.length === 2
                  ? "reservation__selectSeats"
                  : "displayNone"
              }`}
              onClick={handleContinue}
            >
              Seleccionar asientos
            </button>
          </div>
        </>
      )}
    </div>
  );
};
