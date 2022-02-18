import React from "react";
import "./styles.css";
import { InputBase } from "@material-ui/core";
import { handleClick } from "../../api";

function Search({ setLocations, value, setValue }) {
  return (
    <div>
      <InputBase
        className="search"
        placeholder="🔎 Search Location"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        className="button"
        onClick={() => handleClick(value, setLocations, setValue)}
      >
        🔎
      </button>
    </div>
  );
}

export default Search;
