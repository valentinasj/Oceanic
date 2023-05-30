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

  const [selectionBaggages, setSelectionBaggages] = useState([]);
  const [priceBaggagesSelected, setPriceBaggagesSelected] = useState([]);
  const [hoursFlightDeparture, sethoursFlightDeparture] = useState({});

  const getFlightFormFromSessionStorage = () => {
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

  useEffect(() => {
    getFlightFormFromSessionStorage();
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
        }}
      >
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="vuelosProgramados" element={<ScheduledFlights />} />
            <Route path="seleccionarAsientos" element={<SeatSelection />} />
            <Route path="pagos" element={<Payment />} />
          </Route>
        </Routes>
      </flightParamsContext.Provider>
    </BrowserRouter>
  );
};

export default AppRouter;
