import React from "react";
import "./styles.css";
import sunImage from "./../../images/sun.png";
import rainImage from "./../../images/rain.png";

function WeatherCard({ name, temp, locations, setLocations }) {
  const deleteLocation = () => {
    const newList = locations.filter((location) => location?.name !== name);
    setLocations(newList);
  };

  return (
    <>
      <div className="container">
        <div className="widget">
          <div className="delete" onClick={deleteLocation}>
            X
          </div>
          <div className="left-panel panel">
            <div className="city">{name}</div>
            <div className="temp">
              <img
                src={temp < 10 ? rainImage : sunImage}
                alt=""
                width="60"
              ></img>
              {Math.floor(temp)}&deg;
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
