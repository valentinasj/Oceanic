import React, { createContext, useState } from "react";
import "./ScheduledFlights.scss";
import { FlightCard } from "../../components/flightCard/FlightCard";
import { Reservation } from "../../components/reservation/Reservation";

export const paramsContext = createContext({});

export const ScheduledFlights = () => {
  const [selectionBaggages, setSelectionBaggages] = useState([]);
  const [priceBaggagesSelected, setPriceBaggagesSelected] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [hoursFlightDeparture, sethoursFlightDeparture] = useState({});

  const infoDeparture = {
    date: "Martes 30 nov de 2021",
    travel: "Cd. Mex (AICM) a Culiacán",
    tipoVuelo: "Salida",
  };
  const infoArrival = {
    date: "Miércoles 8 dic 2021",
    travel: "Culiacán a Cd. Mex (AICM)",
    tipoVuelo: "Llegada",
  };

  return (
    <div className="scheduleFlights">
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
    </div>
  );
};
