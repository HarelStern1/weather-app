import React from "react";
import "./styles.css";
import WeatherCard from "./../WeatherCard/WeatherCard";

function List({ locations, setLocations }) {
  return (
    <div className="container">
      {locations.map((location, idx) => (
        <WeatherCard
          key={idx}
          name={location?.name}
          temp={location?.main?.temp}
          locations={locations}
          setLocations={setLocations}
        />
      ))}
    </div>
  );
}

export default List;
