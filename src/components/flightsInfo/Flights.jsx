import React, { useEffect, useState } from "react";
import backPlane from "../../assets/avion-655x368.jpg";
import calendarIcon from "../../assets/calendar.svg";
import planeIcon from "../../assets/plane.svg";
import downIcon from "../../assets/chevron-down.svg";
import "./Flights.scss";
import { Place } from "../departureDestination/Place";
import { Passengers } from "../passengers/Passengers";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import axios from "axios";
export const Flights = () => {
    const api =
        "https://airlabs.co/api/v9/countries?api_key=d3c5223a-f869-4381-acda-ec7a09b086e3";

    const [passengersAmount, setPassengersAmount] = useState([
        "0 Adultos",
        "0 Niños",
        "0 Bebés",
    ]);
    const [tripeType, setTripeType] = useState("redondo");
    const [placeModal, setPlaceModal] = useState("");
    const [passengersModal, setPassengersModal] = useState(false);
    const [placeSelect, setPlaceSelect] = useState("");
    const [outDate, setOutDate] = React.useState("---");
    const [retDate, setRetDate] = React.useState("---");
    const [adultos, setAdultos] = useState(0);
    const [niños, setNiños] = useState(0);
    const [bebes, setBebes] = useState(0);
    const [countries, setcountries] = useState([]);
    let m = [];
    useEffect(() => {
        countriesApi();
    }, []);
    const countriesApi = () => {
        let prevLet = "";
        axios
            .get(api)
            .then((resp) => {
                let n = 0;
                while (m.length < 10) {
                    if (resp.data.response[n].name[0] !== prevLet) {
                        m.push(resp.data.response[n].name);
                        prevLet = resp.data.response[n].name[0];
                    }
                    n++;
                }
                setcountries(m);
            })
            .catch((err) => {
                console.log(err);
            });
        // console.log("This is - m = ", countries);
    };
    function place(value) {
        setPlaceModal(value);
    }
    function passengers() {
        setPassengersModal(!passengersModal);
    }
    function typeOfTrip(type) {
        setTripeType(type);
    }
    const recibirPlace = (place) => {
        setPlaceModal(place);
    };
    function selectPlace(place) {
        setPlaceSelect(place);
    }
    function plusOrLess(passType, amount) {
        switch (passType) {
            case "adulto":
                const adultos2 = [...passengersAmount];
                if (amount === 1) {
                    adultos2[0] = `${amount} Adulto`;
                } else if (amount <= 0) {
                    adultos2[0] = "";
                } else {
                    adultos2[0] = `${amount} Adultos`;
                }
                setAdultos(amount);
                setPassengersAmount(adultos2);
                break;
            case "niño":
                const niños2 = [...passengersAmount];
                if (amount === 1) {
                    niños2[1] = `${amount} Niño`;
                } else if (amount <= 0) {
                    niños2[1] = "";
                } else {
                    niños2[1] = `${amount} Niños`;
                }
                setNiños(amount);
                setPassengersAmount(niños2);
                break;
            case "bebe":
                const bebes2 = [...passengersAmount];
                if (amount === 1) {
                    bebes2[2] = `${amount} Bebe`;
                } else if (amount <= 0) {
                    bebes2[2] = "";
                } else {
                    bebes2[2] = `${amount} Bebes`;
                }
                setBebes(amount);
                setPassengersAmount(bebes2);
                break;
            default:
                break;
        }
    }
    const handleChange = (event) => {
        const opcionesFecha = {
            weekday: "short",
            day: "numeric",
            month: "short",
            year: "numeric",
        };
        if (event.target.name === "out") {
            setOutDate(
                new Date(event.target.value).toLocaleDateString(
                    "es-ES",
                    opcionesFecha
                )
            );
        } else if (event.target.name === "ret") {
            setRetDate(
                new Date(event.target.value).toLocaleDateString(
                    "es-ES",
                    opcionesFecha
                )
            );
        }
    };
    return (
        <div className="flights-info">
            <div className="form">
                <div className="form-header">
                    <h2>Busca un nuevo destino y comienza la aventura.</h2>
                    <p>
                        Descubre vuelos al mejor precio y perfectos para
                        cualquier viaje.
                    </p>
                </div>
                <div className="flight-type">
                    <button
                        onClick={() => typeOfTrip("redondo")}
                        className={`my-element ${
                            tripeType === "redondo" ? "active" : ""
                        } butt red`}
                    >
                        Viaje redondo
                    </button>
                    <button
                        onClick={() => typeOfTrip("sencillo")}
                        className={`my-element ${
                            tripeType === "sencillo" ? "active" : ""
                        } butt sen`}
                    >
                        Viaje sencillo
                    </button>
                </div>
                <div className="form-inputs">
                    <div className="inp origin">
                        <h1>Ciudad de México</h1>
                        <span>Origen</span>
                    </div>
                    <div className="inp destination">
                        {placeSelect ? (
                            <h1 className="destin">Ciudad de {placeSelect}</h1>
                        ) : (
                            <h1 className="lines">---</h1>
                        )}
                        <button
                            name="destination"
                            onClick={() => place("destination")}
                            className="butt dest"
                        >
                            {placeSelect === "---"
                                ? "Seleccione un destino"
                                : "Destino"}
                        </button>
                    </div>
                    {placeModal !== "" && (
                        <>
                            {placeModal === "destination" && (
                                <Place
                                    cerrarModal={recibirPlace}
                                    placeS={selectPlace}
                                    countries={countries}
                                />
                            )}
                        </>
                    )}
                    <div className="inp out">
                        <img className="icon" src={calendarIcon} alt="" />
                        <span className="title">Salida</span>
                        <p className="date">{outDate}</p>
                        <DatePicker name="out" onChange={handleChange} />
                    </div>
                    <div className="inp ret">
                        <span className="title">Regreso</span>
                        <p className="date">{retDate}</p>
                        <img className="icon" src={calendarIcon} alt="" />
                        <DatePicker name="ret" onChange={handleChange} />
                    </div>
                    <div className="inp passengers">
                        <span>Pasajeros</span>
                        <button
                            onClick={() => passengers()}
                            name="pass"
                            className="butt"
                        >
                            {passengersAmount[0].length > 0 ||
                            passengersAmount[1].length > 0 ||
                            passengersAmount[2].length > 0 ? (
                                <>
                                    <ul className="passengers-amount">
                                        {passengersAmount.map((pass, i) => (
                                            <li className="each-pas">{pass}</li>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <p>---</p>
                                </>
                            )}
                            <img className="down" src={downIcon} alt="" />
                        </button>
                    </div>
                    {passengersModal && (
                        <>
                            <Passengers
                                cerrarModal={passengers}
                                plusOrLess={plusOrLess}
                                adultos={adultos}
                                niños={niños}
                                bebes={bebes}
                            />
                        </>
                    )}
                    <div className="inp code">
                        <span>¿Tienes un código de promoción?</span>
                        <input type="text" placeholder="-- -- -- --" />
                    </div>
                </div>
                <button className="search">
                    <img src={planeIcon} alt="" /> Buscar Vuelos
                </button>
            </div>
            <div className="img-cont">
                <img className="back-plane" src={backPlane} alt="" />
            </div>
        </div>
    );
};
