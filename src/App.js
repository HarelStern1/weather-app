import React, { useState } from "react";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import List from "./components/List/List";

function App() {
  const [locations, setLocations] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div>
      <Header />
      <Search setLocations={setLocations} value={value} setValue={setValue} />
      <List locations={locations} setLocations={setLocations} />
    </div>
  );
}

export default App;
