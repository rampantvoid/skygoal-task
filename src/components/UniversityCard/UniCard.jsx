import "./UniCard.css";
import React from "react";

const UniCard = ({ image, name, address }) => {
  return (
    <div className="embla__slide">
      <li className="card">
        <div className="img">
          <img src={image} alt="img" draggable="false" />
        </div>
        <div className="uni-name">
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "28px",
              fontWeight: "900",
              margin: "0px",
              padding: "25px",
            }}
          >
            {name}
          </p>
        </div>
        <div className="uni-address">
          <p
            style={{
              fontFamily: "Roboto",
              fontSize: "14px",
              fontWeight: "500",
              padding: "10px 25px 25px 25px",
              margin: "0px",
            }}
          >
            {address}
          </p>
        </div>
      </li>
    </div>
  );
};

export default UniCard;
