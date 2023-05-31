import React, { useState, useEffect, useContext } from "react";
import "./FlightCard.scss";
import { getDepartureDates } from "../../services/getDepartureDates";
import logoItinerary from "../../assets/IconItinerary.jpg";
import logoBaggage from "../../assets/briefcase.svg";
import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { flightParamsContext } from "../../routes/AppRouter";

export const FlightCard = ({ infoFlight }) => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState("");
  const [datesDeparture, setDatesDeparture] = useState([]);

  const {
    selectionBaggages,
    setSelectionBaggages,
    priceBaggagesSelected,
    setPriceBaggagesSelected,
    hoursFlightDeparture,
    sethoursFlightDeparture,
  } = useContext(flightParamsContext);

  const getDatesDeparture = async () => {
    const DepartureDates = await getDepartureDates();
    setDatesDeparture(DepartureDates);
  };

  useEffect(() => {
    getDatesDeparture();
  }, []);

  const handleSelectionBaggage = (
    cardName,
    flightType,
    priceBaggage,
    itinerarioHoraSalida,
    itinerarioHoraLLegada
  ) => {
    if (activeCard === cardName) {
      // Filtrar las horas asociadas al itinerario actual
      const updatedHoursFlightDeparture = { ...hoursFlightDeparture };
      delete updatedHoursFlightDeparture[flightType];
      sethoursFlightDeparture(updatedHoursFlightDeparture);

      setActiveCard("");
      const newSelectionBaggages = selectionBaggages.filter(
        (baggage) => baggage !== flightType
      );
      setSelectionBaggages(newSelectionBaggages);

      const indexToRemove = selectionBaggages.findIndex(
        (baggage) => baggage === flightType
      );
      const newPriceBaggageSelection = priceBaggagesSelected.filter(
        (_, index) => index !== indexToRemove
      );
      setPriceBaggagesSelected(newPriceBaggageSelection);
    } else {
      setActiveCard(cardName);

      if (!selectionBaggages.includes(flightType)) {
        setPriceBaggagesSelected([...priceBaggagesSelected, priceBaggage]);
        setSelectionBaggages([...selectionBaggages, flightType]);
        // Actualizar las horas del nuevo itinerario seleccionado
        sethoursFlightDeparture((prevHours) => ({
          ...prevHours,
          [flightType]: [itinerarioHoraSalida, itinerarioHoraLLegada],
        }));
      } else {
        setPriceBaggagesSelected(
          priceBaggagesSelected.map((price, index) => {
            if (selectionBaggages[index] === flightType) {
              return priceBaggage;
            }
            return price; // Opcional: Si no se encuentra la tarjeta correspondiente, mantener el mismo precio
          })
        );
        sethoursFlightDeparture((prevHours) => {
          const updatedHours = { ...prevHours };
          delete updatedHours[flightType];
          updatedHours[flightType] = [
            itinerarioHoraSalida,
            itinerarioHoraLLegada,
          ];
          return updatedHours;
        });
      }
    }
  };

  const handleBack = () => {
    navigate("/Home");
  };

  return (
    <div className="containerDepartureFlight">
      <div className="departureFlight">
        <h1 className="departureFlight__title">{`Vuelo ${infoFlight.tipoVuelo}`}</h1>
        <button className="departureFlight__changeFlight" onClick={handleBack}>
          Cambiar vuelo
        </button>
      </div>
      <h3 className="containerDepartureFlight__date">{infoFlight.date}</h3>
      <p className="containerDepartureFlight__travel">{infoFlight.travel}</p>
      <div>
        <h4 className="selectionTitle">Selección de horarios y equipajes</h4>
        <div>
          {datesDeparture.length ? (
            datesDeparture
              .find((date) => date.fechaSalida === infoFlight.date)
              .itinerarios.map((itinerario) => {
                return (
                  <div key={itinerario.id} className="itineraries">
                    <h3 className="itineraries__hourDeparture">
                      {itinerario.horaSalida}
                    </h3>
                    <div className="itineraries__infoExtra">
                      <p>{itinerario.duracion}</p>
                      <figure>
                        <img src={logoItinerary} alt="Itinerario logo" />
                      </figure>
                      <p>{itinerario.escalas}</p>
                    </div>
                    <h3 className="itineraries__hourArrival">
                      {itinerario.horaLlegada}
                    </h3>
                    {itinerario.tiposMaletas.map((maleta) => {
                      return (
                        <section
                          key={maleta.id}
                          name={itinerario.id}
                          className={`${
                            activeCard ===
                            `card${maleta.id}${infoFlight.tipoVuelo}`
                              ? "baggages baggages--active"
                              : "baggages"
                          }`}
                          onClick={() =>
                            handleSelectionBaggage(
                              `card${maleta.id}${infoFlight.tipoVuelo}`,
                              `${infoFlight.tipoVuelo}`,
                              `${maleta.precio}`,
                              `${itinerario.horaSalida}`,
                              `${itinerario.horaLlegada}`
                            )
                          }
                        >
                          <figure>
                            <img src={logoBaggage} alt="Logo maleta" />
                          </figure>
                          <p className="baggage__title">{maleta.tipoMaleta}</p>
                          <h4 className="baggage__price">
                            $ {maleta.precio.toLocaleString("es-CO")} COP
                          </h4>
                        </section>
                      );
                    })}
                  </div>
                );
              })
          ) : (
            <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
              <CircularProgress color="secondary" />
            </Stack>
          )}
        </div>
      </div>
    </div>
  );
};
