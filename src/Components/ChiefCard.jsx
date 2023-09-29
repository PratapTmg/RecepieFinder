import React from "react";
import chief from "../Images/chief.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ChiefCard = () => {
  return (
    <div className="chief-card">
      <img src={chief} alt="" />
      <div className="chief-card-info">
        <h3 className="chief-card-name">Boombastic</h3>
        <p className="chief-card-count">
          Recipies: <b>10</b>
        </p>
        <p className="chief-cuisine">
          Cuision: <b>Bulgerian</b>
        </p>
        <p className="chief-icons">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
    </div>
  );
};

export default ChiefCard;
