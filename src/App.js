import React from 'react';

function App() {
  return (
    <div id='app-container' className="h-400px w-300px bg-silver-blue rounded-20px shadow-temperatureApp">

      <div id='temperature-container'>
        <div id='temperature'>16℃</div>
      </div>

      <div id='buttons-container'>
        <button>+</button>
        <button>-</button>
      </div>

    </div>
  );
}

export default App;