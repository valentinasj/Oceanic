import React, { useEffect, useState } from "react";
import "./Place.scss";
import xIcon from "../../assets/x.svg";
import searchIcon from "../../assets/search.svg";
export const Place = ({ cerrarModal, placeS, countries }) => {
    const [filt, setFilt] = useState("");
    const [filter, setFilter] = useState(false);
    useEffect(() => {}, []);
    function cerrarModalH() {
        cerrarModal("");
    }
    function selectPlace(value) {
        cerrarModal("");
        placeS(value);
    }
    function filterPlaces(value) {
        setFilter(true);
        console.log(value.target.value);
        setFilt(value.target.value);
    }
    const filteredData = countries.filter((item) =>
        item.toLowerCase().includes(filt.toLowerCase())
    );
    return (
        <div className="place-modal">
            <div className="place--container">
                <div className="dest-head">
                    <h1>¿ A dónde viajas?</h1>
                    <img
                        onClick={cerrarModalH}
                        className="x"
                        src={xIcon}
                        alt=""
                    />
                </div>
                <div className="search-inp">
                    <img className="search-ic" src={searchIcon} alt="" />
                    <input onChange={filterPlaces} type="text" />
                </div>
                <div className="countries">
                    {filter ? (
                        <>
                            {filteredData.map((place, i) => (
                                <button
                                    onClick={() => selectPlace(place)}
                                    className="count-btn"
                                >
                                    {place}
                                </button>
                            ))}
                        </>
                    ) : (
                        <>
                            {countries.map((place, i) => (
                                <button
                                    onClick={() => selectPlace(place)}
                                    className="count-btn"
                                >
                                    {place}
                                </button>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
