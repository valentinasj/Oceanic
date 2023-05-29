import React, { useContext } from "react";
import "./Reservation.scss";
import { useNavigate } from "react-router-dom";
import { paramsContext } from "../../pages/scheduledFlights/ScheduledFlights";

export const Reservation = () => {
  const navigate = useNavigate();

  const { selectionBaggages, priceBaggagesSelected, hoursFlightDeparture } =
    useContext(paramsContext);

  const handleContinue = () => {
    navigate("/seleccionarAsientos");
  };

  const addPrices = () => {
    const add = priceBaggagesSelected.reduce(
      (total, price) => total + parseInt(price),
      0
    );
    return add;
  };

  const addTotal = addPrices();

  const cupon = "1234";

  const aplicarDescuento = (cupon) => {
    if (cupon === "1234") {
      return -10000;
    } else if (cupon === "5678") {
      return -20000;
    } else if (cupon === "9999") {
      return -30000;
    }
  };

  const discount = aplicarDescuento(cupon);
  const discount2 = -12500;
  const totalWithDiscount = addTotal + discount + discount2;

  const ivaFee = 0.19 * totalWithDiscount;

  const totalToPay = totalWithDiscount + ivaFee;

  return (
    <div className="reservation">
      <h3>Tu reservación</h3>
      <section className="schedule">
        <div className="schedule__passengers">
          <p>Pasajeros</p>
          <h6>1 Adulto</h6>
        </div>
        <p className="departureFlightTitle">Vuelo de salida</p>
        <h4 className="departureFlightDestinations">MEX __ CUL</h4>
        <div className="schedule__hours">
          {Object.keys(hoursFlightDeparture).length === 2 ? (
            <>
              <p>{hoursFlightDeparture.Salida[0]}</p>
              <p>{hoursFlightDeparture.Salida[1]}</p>
            </>
          ) : (
            <p>Seleccionar Horario</p>
          )}
        </div>
        <h6 className="departureFlightDate">Martes, 30 de noviembre, 2021</h6>
        <p className="returnFlightTitle">Vuelo de regreso</p>
        <h4 className="returnFlightDestinations">CUL __ MEX</h4>
        <div className="schedule__hours">
          {Object.keys(hoursFlightDeparture).length === 2 ? (
            <>
              <p>{hoursFlightDeparture.Llegada[0]}</p>
              <p>{hoursFlightDeparture.Llegada[1]}</p>
            </>
          ) : (
            <p>Seleccionar Horario</p>
          )}
        </div>
        <h6 className="returnFlightDate">Miércoles, 08 de diciembre, 2021</h6>
      </section>
      <h3 className="pricesTitle">Costos de vuelo</h3>
      <section className="prices">
        <div className="prices__values">
          <p>Tarifa base</p>
          <p>$ {addTotal.toLocaleString("es-CO")} COP</p>
        </div>
        <div className="prices__values">
          <p>Descuento promocional</p>
          <p>$ {discount.toLocaleString("es-CO")} COP</p>
        </div>
        <div className="prices__values">
          <p>Descuento promocional 2</p>
          <p>$ {discount2.toLocaleString("es-CO")} COP</p>
        </div>
        <div className="prices__values">
          <p>Tarifa base con descuento</p>
          <p>$ {totalWithDiscount.toLocaleString("es-CO")} COP</p>
        </div>
        <div className="prices__values">
          <p>IVA Tarifa</p>
          <p>$ {ivaFee.toLocaleString("es-CO")} COP</p>
        </div>
        <div className="prices__values">
          <h6 className="totalPriceFlight">Total</h6>
          <h6 className="totalPriceFlight">
            $ {totalToPay.toLocaleString("es-CO")} COP
          </h6>
        </div>
      </section>
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
  );
};
