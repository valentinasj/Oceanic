import React from "react";
import logo from "../../assets/Logo.jpg";
import "./Layout.scss";
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <div className="Layout">
                <figure>
                    <img src={logo} alt="" />
                </figure>
            </div>
            <Outlet />
        </>
    );
};
