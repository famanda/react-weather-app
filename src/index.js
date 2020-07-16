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
        <a href="https://github.com/famanda/weather-app" target="_blank">
          Open-source code
        </a>
        <br />
        Felicia Amanda
      </small>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
