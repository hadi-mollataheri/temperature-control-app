import { React, useState } from "react";

function App() {
  // Create a state for the temperature number
  const [temperatureValue, setTemperatureValue] = useState(22);
  // Create event handler functions for changing temperatureValue
  const increaseValue = () => {
    setTemperatureValue((prevTemperatureValue) => {
      return prevTemperatureValue + 1;
    });
  };
  const decreaseValue = () => {
    setTemperatureValue((prevTemperatureValue) => {
      return prevTemperatureValue - 1;
    });
  };

  return (
    <div
      id="app-container"
      className="h-400px w-300px bg-silver-blue rounded-20px shadow-temperatureApp"
    >
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}℃</div>
      </div>

      <div className="button-container">
        <button onClick={decreaseValue}>-</button>
        <button onClick={increaseValue}>+</button>
      </div>
    </div>
  );
}

export default App;
