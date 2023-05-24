import React from "react";
import "./Payments.scss";
import amex from "../../assets/amex-card.webp";
import payPal from "../../assets/paypal.png";
import invex from "../../assets/banco-invex.jpg";
import master from "../../assets/mastercard-card.png";
import visa from "../../assets/visa-card.png";
import oxxo from "../../assets/OXXO.png";
import sevenEleven from "../../assets/7-eleven.png";
import walmart from "../../assets/Walmart.webp";
import farmacias from "../../assets/farmacias.png";

export const Payments = () => {
    let cards = [amex, payPal, invex, master, visa];
    let cash = [oxxo, sevenEleven, walmart, farmacias];
    return (
        <div className="payments">
            <h1 className="title">Pago seguro</h1>
            <div className="payment-methods">
                <div className="card-methods">
                    <span className="card-desc">
                        Tarjeta de crédito, tarjeta de débito y pago electrónico
                    </span>
                    <div className="cards">
                        {cards.map((card, i) => (
                            <img className="card" src={card} alt="" />
                        ))}
                    </div>
                </div>
                <div className="cash-methods">
                    <span className="cash-desc">
                        Efectivo en cualquiera de las sucursales participantes
                    </span>
                    <div className="cash">
                        {cash.map((money, i) => (
                            <img className="money" src={money} alt="" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
