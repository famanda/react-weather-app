import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>React Weather App</h1>
      <Weather />
      <small>
        {" "}
        <span href="https://github.com/famanda/weather-app" target="_blank">
          Open-source code
        </span>
        <br />
        Felicia Amanda
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
