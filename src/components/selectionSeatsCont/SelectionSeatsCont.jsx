import React, { useContext } from "react";
import Swal from "sweetalert2";
import { flightParamsContext } from "../../routes/AppRouter";
import { useNavigate } from "react-router-dom";
import "./SelectionSeatsCont.scss";

export const SelectionSeatsCont = ({ infoFlight, isDeparture }) => {
  const navigate = useNavigate();
  const letters = ["A", "B", "C", "", "D", "E", "F"];
  const numRows = 10;

  /*   const [selectedSeatsDeparture, setSelectedSeatsDeparture] = useState([]);
  const [selectedSeatsArrival, setSelectedSeatsArrival] = useState([]); */
  /*   const [numberSeats, setNumberSeats] = useState(0); */

  const {
    numberSeatsDeparture,
    setNumberSeatsDeparture,
    numberSeatsArrival,
    setNumberSeatsArrival,
    flightForm,
    setSelectionBaggages,
    setPriceBaggagesSelected,
    sethoursFlightDeparture,
    selectedSeatsDeparture,
    setSelectedSeatsDeparture,
    selectedSeatsArrival,
    setSelectedSeatsArrival,
  } = useContext(flightParamsContext);

  const numPassengers = flightForm.passengers;

  const suma = numPassengers
    .map((pasajero) => {
      if (pasajero === "") {
        return 0;
      }
      return parseInt(pasajero.charAt(0));
    })
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);

  /*   useEffect(() => {
    console.log(selectedSeats);
    console.log(numberSeats);
  }, [selectedSeats, numberSeats]); */

  const handleSelectionSeat = (cardName, isDeparture) => {
    if (isDeparture) {
      if (selectedSeatsDeparture.includes(cardName)) {
        setSelectedSeatsDeparture(
          selectedSeatsDeparture.filter((seat) => seat !== cardName)
        );
        setNumberSeatsDeparture((prevNumberSeats) => prevNumberSeats - 1);
        /* setNumberSeats(numberSeats - 1); */
      } else {
        if (numberSeatsDeparture >= suma) {
          Swal.fire(
            "Oops!",
            "Ya no puedes seleccionar más asientos en la sección de salida. Deselecciona alguno para cambiarlo.",
            "error"
          );
        } else {
          setSelectedSeatsDeparture([...selectedSeatsDeparture, cardName]);
          setNumberSeatsDeparture((prevNumberSeats) => prevNumberSeats + 1);
        }
      }
    } else {
      if (selectedSeatsArrival.includes(cardName)) {
        setSelectedSeatsArrival(
          selectedSeatsArrival.filter((seat) => seat !== cardName)
        );
        setNumberSeatsArrival((prevNumberSeats) => prevNumberSeats - 1);
      } else {
        if (numberSeatsArrival >= suma) {
          Swal.fire(
            "Oops!",
            "Ya no puedes seleccionar más asientos en la sección de llegada. Deselecciona alguno para cambiarlo.",
            "error"
          );
        } else {
          setSelectedSeatsArrival([...selectedSeatsArrival, cardName]);
          setNumberSeatsArrival((prevNumberSeats) => prevNumberSeats + 1);
        }
      }
    }
  };

  const handleBack = () => {
    setSelectionBaggages([]);
    setPriceBaggagesSelected([]);
    sethoursFlightDeparture({});
    setNumberSeatsArrival(0);
    setNumberSeatsDeparture(0);

    navigate("/Home");
  };

  return (
    <div className="setSelectionComponent">
      <div className="departureFlight">
        <h1 className="departureFlight__title">{`Vuelo ${infoFlight.tipoVuelo}`}</h1>
        <button className="departureFlight__changeFlight" onClick={handleBack}>
          Cambiar vuelo
        </button>
      </div>
      <h3 className="containerDepartureFlight__date">{infoFlight.date}</h3>
      <p className="containerDepartureFlight__travel">{infoFlight.travel}</p>
      <h4 className="selectionChairs__title">Selección de asientos</h4>
      <div className="letersChairs">
        <div className="letersChairs__container">
          <div className="box">A</div>
          <div className="box">B</div>
          <div className="box">C</div>
        </div>
        <div className="letersChairs__container">
          <div className="box">D</div>
          <div className="box">E</div>
          <div className="box">F</div>
        </div>
      </div>
      <p className="selectionChairs__exit">Salida rápida</p>
      <div className="selectionChairs__chairs">
        {Array.from({ length: numRows }).map((_, rowIndex) => {
          const num = 1 + rowIndex;

          // Verificar si es la quinta fila
          if (rowIndex === 4) {
            return (
              <p key={rowIndex} className="standardSeats">
                Estándar
              </p>
            );
          }

          return (
            <div className="letersChairs__container" key={rowIndex}>
              {letters.map((letter, index) => {
                if (index === 3) {
                  return (
                    <div
                      className="box boxNumber"
                      key={`${letter}${num}`}
                      name={`${letter}${num}`}
                    >
                      {num}
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`${
                        (isDeparture
                          ? selectedSeatsDeparture
                          : selectedSeatsArrival
                        ).includes(`${letter}${num}${infoFlight.tipoVuelo}`)
                          ? `box2 ${letter}${num} seat--active`
                          : `box2 ${letter}${num}`
                      }`}
                      key={`${letter}${num}`}
                      name={`${letter}${num}`}
                      onClick={() =>
                        handleSelectionSeat(
                          `${letter}${num}${infoFlight.tipoVuelo}`,
                          isDeparture
                        )
                      }
                    ></div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
