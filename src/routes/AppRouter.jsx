import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/home/Home";
import "@progress/kendo-theme-default/dist/all.css";
import "./AppRouter.scss";
import { ScheduledFlights } from "../pages/scheduledFlights/ScheduledFlights";
import { SeatSelection } from "../pages/seatSelection/SeatSelection";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="vuelosProgramados" element={<ScheduledFlights />} />
          <Route path="seleccionarAsientos" element={<SeatSelection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
