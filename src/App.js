import { React, useState, useEffect } from "react";

function App() {
  // Create a state for the temperature number
  const [temperatureValue, setTemperatureValue] = useState(22);
  // Create a state for the temperature color
  const [temperatureColor, setTemperatureColor] = useState("cold");

  // Create event handler functions for changing temperatureValue
  const increaseValue = (e) => {
    setTemperatureValue((prevTemperatureValue) => {
      if (prevTemperatureValue === 40) return prevTemperatureValue;
      return prevTemperatureValue + 1;
    });
  };
  const decreaseValue = () => {
    setTemperatureValue((prevTemperatureValue) => {
      if (prevTemperatureValue === -10) return prevTemperatureValue;
      return prevTemperatureValue - 1;
    });
  };
  // Apply the corresponding css style(effect) for temperature-display when
  // value goes upper than 22 and lower than 22
  useEffect(() => {
    if (temperatureValue > 22) {
      setTemperatureColor("hot");
    } else {
      setTemperatureColor("cold");
    }
  }, [temperatureValue]);

  return (
    <div
      id="app-container"
      className="h-400px w-300px bg-silver-blue rounded-20px shadow-temperatureApp"
    >
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}℃
        </div>
      </div>

      <div className="button-container">
        <button onClick={decreaseValue}>-</button>
        <button onClick={increaseValue}>+</button>
      </div>
    </div>
  );
}

export default App;
