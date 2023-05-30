import React, { createContext, useContext, useState } from "react";
import "./ScheduledFlights.scss";
import { FlightCard } from "../../components/flightCard/FlightCard";
import { Reservation } from "../../components/reservation/Reservation";
import { flightParamsContext } from "../../routes/AppRouter";
import { useNavigate } from "react-router-dom";

export const paramsContext = createContext({});

export const ScheduledFlights = () => {
  const navigate = useNavigate();
  const [selectionBaggages, setSelectionBaggages] = useState([]);
  const [priceBaggagesSelected, setPriceBaggagesSelected] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [hoursFlightDeparture, sethoursFlightDeparture] = useState({});

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

  const handleBack = () => {
    navigate("/Home");
  };

  console.log(flightForm);

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
        <paramsContext.Provider
          value={{
            selectionBaggages,
            setSelectionBaggages,
            priceBaggagesSelected,
            setPriceBaggagesSelected,
            schedules,
            setSchedules,
            hoursFlightDeparture,
            sethoursFlightDeparture,
          }}
        >
          <div className="departureAndReservation">
            <FlightCard infoFlight={infoDeparture} />
            <FlightCard infoFlight={infoArrival} />
          </div>
          <Reservation
            infoFlightDeparture={infoDeparture}
            infoFlightArrival={infoArrival}
          />
        </paramsContext.Provider>
      )}
    </div>
    /*     <div className="scheduleFlights">
      <paramsContext.Provider
        value={{
          selectionBaggages,
          setSelectionBaggages,
          priceBaggagesSelected,
          setPriceBaggagesSelected,
          schedules,
          setSchedules,
          hoursFlightDeparture,
          sethoursFlightDeparture,
        }}
      >
        <div className="departureAndReservation">
          <FlightCard infoFlight={infoDeparture} />
          <FlightCard infoFlight={infoArrival} />
        </div>
        <Reservation />
      </paramsContext.Provider>
    </div> */
  );
};
