import React from "react";
import "./Card.css";

interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card: React.FC<Props> = ({ companyName, ticker, price }) => {
    return (
        <div className="card">
            <img src="" alt={`${companyName} logo`} />
            <h2>{companyName}</h2>
            <p>Ticker: {ticker}</p>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
};

export default Card;
