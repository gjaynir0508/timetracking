import React, { useState } from "react";
import Data from "./../data.json";
import Blocks from "./Blocks";
import Person from "./Person";
import "./components.css";

function App() {
  const [time, setTime] = useState("weekly");

  return (
    <div className="grid-container">
      <Person
        img="/images/image-jeremy.png"
        nameOfPerson="Jeremy Robson"
        setTime={setTime}
        time={time}
      />
      <Blocks blocks={Data} time={time} />
    </div>
  );
}

export default App;
