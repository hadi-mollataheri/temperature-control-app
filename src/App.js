import React from 'react';

function App() {
  return (
    <div id='app-container' className="h-400px w-300px bg-silver-blue rounded-20px shadow-temperatureApp">

      <div className='temperature-display-container'>
        <div className='temperature-display'>16℃</div>
      </div>

      <div className='button-container'>
        <button>+</button>
        <button>-</button>
      </div>

    </div>
  );
}

export default App;