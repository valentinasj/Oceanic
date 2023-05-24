import React, { useState } from "react";
import "./Passengers.scss";
import xIcon from "../../assets/x.svg";

export const Passengers = (props) => {
    const [amount, setAmount] = useState([
        props.adultos,
        props.niños,
        props.bebes,
    ]);
    function cerrarModalH() {
        props.cerrarModal();
    }
    function plusOrLessFunc(pol, type) {
        switch (type) {
            case "adulto":
                if (pol === "plus") {
                    const updatedArray = [...amount];
                    updatedArray[0] += 1;
                    setAmount(updatedArray);
                    props.plusOrLess("adulto", amount[0] + 1);
                } else if (pol === "less") {
                    if (amount[0] > 0) {
                        const updatedArray = [...amount];
                        updatedArray[0] -= 1;
                        setAmount(updatedArray);
                        props.plusOrLess("adulto", amount[0] - 1);
                    }
                }
                break;
            case "niño":
                if (pol === "plus") {
                    const updatedArray = [...amount];
                    updatedArray[1] += 1;
                    setAmount(updatedArray);
                    props.plusOrLess("niño", amount[1] + 1);
                } else if (pol === "less") {
                    if (amount[1] > 0) {
                        const updatedArray = [...amount];
                        updatedArray[1] -= 1;
                        setAmount(updatedArray);
                        props.plusOrLess("niño", amount[1] - 1);
                    }
                }
                break;
            case "bebe":
                if (pol === "plus") {
                    const updatedArray = [...amount];
                    updatedArray[2] += 1;
                    setAmount(updatedArray);
                    // console.log("This is - bebes = ", amount[2] + 1);
                    props.plusOrLess("bebe", amount[2] + 1);
                } else if (pol === "less") {
                    if (amount[2] > 0) {
                        const updatedArray = [...amount];
                        updatedArray[2] -= 1;
                        setAmount(updatedArray);
                        // console.log("This is - bebes = ", amount[2] - 1);
                        props.plusOrLess("bebe", amount[2] - 1);
                    }
                }
                break;
            default:
                break;
        }
    }
    return (
        <div className="passengers-modal">
            <div className="passengers--container">
                <div className="dest-head">
                    <img
                        onClick={cerrarModalH}
                        className="x"
                        src={xIcon}
                        alt=""
                    />
                </div>
                <div className="each">
                    <div className="desc">
                        <h5>Adultos</h5>
                        <span>(13+ años)</span>
                    </div>
                    <div className="plusOrLess">
                        <button
                            onClick={() => plusOrLessFunc("less", "adulto")}
                        >
                            -
                        </button>
                        <p className="amount">{amount[0]}</p>
                        <button
                            onClick={() => plusOrLessFunc("plus", "adulto")}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="each">
                    <div className="desc">
                        <h5>Niños</h5>
                        <span>(2 - 12 años)</span>
                    </div>
                    <div className="plusOrLess">
                        <button onClick={() => plusOrLessFunc("less", "niño")}>
                            -
                        </button>
                        <p className="amount">{amount[1]}</p>
                        <button onClick={() => plusOrLessFunc("plus", "niño")}>
                            +
                        </button>
                    </div>
                </div>
                <div className="each">
                    <div className="desc">
                        <h5>Bebés</h5>
                        <span>(0 - 2 años)</span>
                    </div>
                    <div className="plusOrLess">
                        <button onClick={() => plusOrLessFunc("less", "bebe")}>
                            -
                        </button>
                        <p className="amount">{amount[2]}</p>
                        <button onClick={() => plusOrLessFunc("plus", "bebe")}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
