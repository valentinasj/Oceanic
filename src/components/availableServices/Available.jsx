import React from "react";
import "./Available.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCar,
    faPlaneUp,
    faUserGroup,
    faBed,
    faBox,
} from "@fortawesome/free-solid-svg-icons";

export const Available = () => {
    let icons = [
        {
            icon: faCar,
            title: "Transporte",
            desc: "Renta un auto o reserva un shuttle.",
        },
        {
            icon: faPlaneUp,
            title: "Vuelos + Hoteles",
            desc: "Encuentra las mejores ofertas para tu viaje",
        },
        {
            icon: faUserGroup,
            title: "Grupos",
            desc: "Obtén una cotizacón para grupos de mås de 9 personas.",
        },
        {
            icon: faBed,
            title: "Hoteles",
            desc: "Resrva cualquier habitación en cualquier parte del mundo.",
        },
        {
            icon: faBox,
            title: "Carga",
            desc: "Contamos con servicio de carga y mensajeria.",
        },
    ];

    return (
        <div className="available">
            <h1 className="title">Servicios disponibles</h1>
            <div className="cards">
                {icons.map((icon, i) => (
                    <div className="each">
                        <FontAwesomeIcon className="icon" icon={icon.icon} />
                        <h2>{icon.title}</h2>
                        <p>{icon.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
