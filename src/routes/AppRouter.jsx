import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";
import "@progress/kendo-theme-default/dist/all.css";
import "./AppRouter.scss";
import { ScheduledFlights } from "../pages/scheduledFlights/ScheduledFlights";
import { SeatSelection } from "../pages/seatSelection/SeatSelection";
import { createContext, useEffect, useState } from "react";
import { Payment } from "../pages/payment/Payment";

export const flightParamsContext = createContext({});

const AppRouter = () => {
  const [flightForm, setFlightForm] = useState({
    type: "",
    origin: "",
    destination: "",
    leave: "",
    return: "",
    passengers: "",
    code: "",
  });

  const getFlightFromSessionStorage = () => {
    const flightFormFromSessionStorage = sessionStorage.getItem("flightForm")
      ? JSON.parse(sessionStorage.getItem("flightForm"))
      : {};
    setFlightForm({ ...flightFormFromSessionStorage });

    /*     const priceBaggagesSelectedFromSessionStorage = sessionStorage.getItem(
      "priceBaggagesSelected"
    )
      ? JSON.parse(sessionStorage.getItem("priceBaggagesSelected"))
      : [];
    setPriceBaggagesSelected(priceBaggagesSelectedFromSessionStorage);

    const hoursFlightDepartureFromSessionStorage = sessionStorage.getItem(
      "hoursFlightDeparture"
    )
      ? JSON.parse(sessionStorage.getItem("hoursFlightDeparture"))
      : {};

    sethoursFlightDeparture({
      ...hoursFlightDepartureFromSessionStorage,
    }); */
  };

  const [selectionBaggages, setSelectionBaggages] = useState([]);
  const [priceBaggagesSelected, setPriceBaggagesSelected] = useState([]);
  const [hoursFlightDeparture, sethoursFlightDeparture] = useState({});
  const [numberSeatsDeparture, setNumberSeatsDeparture] = useState(0);
  const [numberSeatsArrival, setNumberSeatsArrival] = useState(0);
  const [selectedSeatsDeparture, setSelectedSeatsDeparture] = useState([]);
  const [selectedSeatsArrival, setSelectedSeatsArrival] = useState([]);

  useEffect(() => {
    getFlightFromSessionStorage();
  }, []);

  return (
    <BrowserRouter>
      <flightParamsContext.Provider
        value={{
          flightForm,
          setFlightForm,
          selectionBaggages,
          setSelectionBaggages,
          priceBaggagesSelected,
          setPriceBaggagesSelected,
          hoursFlightDeparture,
          sethoursFlightDeparture,
          numberSeatsDeparture,
          setNumberSeatsDeparture,
          numberSeatsArrival,
          setNumberSeatsArrival,
          selectedSeatsDeparture,
          setSelectedSeatsDeparture,
          selectedSeatsArrival,
          setSelectedSeatsArrival,
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Oceanic" element={<Home />} />
            <Route path="/vuelosProgramados" element={<ScheduledFlights />} />
            <Route path="/seleccionarAsientos" element={<SeatSelection />} />
            <Route path="/pagos" element={<Payment />} />
          </Route>
        </Routes>
      </flightParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
