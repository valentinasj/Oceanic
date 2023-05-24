import React from "react";
import { Flights } from "../../components/flightsInfo/Flights";
import "./Home.scss";
import { Payments } from "../../components/paymantes/Payments";
import { Available } from "../../components/availableServices/Available";

export const Home = () => {
    return (
        <div className="home">
            <Flights />
            <Payments />
            <Available />
        </div>
    );
};
