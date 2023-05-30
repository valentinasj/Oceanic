import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";
import "@progress/kendo-theme-default/dist/all.css";
import "./AppRouter.scss";
import { ScheduledFlights } from "../pages/scheduledFlights/ScheduledFlights";
import { SeatSelection } from "../pages/seatSelection/SeatSelection";
import { createContext, useState } from "react";
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
