import React, { useContext } from "react";
import { flightParamsContext } from "../../routes/AppRouter";
import { Reservation } from "../../components/reservation/Reservation";

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

  return (
    <div>
      <p>Holi Página de Pagos</p>
      <Reservation
        infoFlightDeparture={infoDeparture}
        infoFlightArrival={infoArrival}
      />
    </div>
  );
};
