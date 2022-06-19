// import {useState} from 'react';
// import axios from 'axio';

function App() {

//  const url =`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=4e989d2bab3ac720d2bede89c770f680`

  return (
    <div className="app">
      <div className="container"></div>
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>30C</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>29C</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 MPH</p>
          </div>
        </div>
    </div>
  );
}

export default App;
