import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./BatteryDown.css";

const BatteryDown = () => {
  let [charge, setCharge] = useState(99);
  const upBattery = () => setCharge(charge + 1);
  const downBattery = () => setCharge(charge - 5);
  let batteryDown;
  if (charge <= 0) {
    charge = 0;
    batteryDown = { visibility: "visible" };
  }
  if (charge >= 100) {
    charge = 100;
    batteryDown = { visibility: "visible" };
  }
  return (
    <section className="mainSection">
      <div className="batteryDown">
        <h1>Battery</h1>
        <div className="batteryShape">
          <div className="level">
            <p style={batteryDown} className="noCharge">
              !
            </p>
            <div style={{ width: charge + "%" }} className="percentage"></div>
          </div>
        </div>
        <h1>{charge}%</h1>
        <div className="allButton">
        <button className="btn" onClick={upBattery}>
            Battery Up <FontAwesomeIcon icon="fa-solid fa-up" />
          </button>
          <button className="btn" onClick={downBattery}>
            Battery Down <FontAwesomeIcon icon="fa-solid fa-down" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BatteryDown;
