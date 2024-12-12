import { useState } from 'react'
import './App.css'
import SearchIcon from "./images/weather/search-icon.svg"
import Sunny from "./images/weather/sunny.svg"
import Drizzle from "./images/weather/sleet.svg"
import Rain from "./images/weather/rain.svg"
import Wind from "./images/weather/wind-icon.svg"
import Snow from "./images/weather/snow.svg"
import Humidity from "./images/weather/humidity-icon.svg"
import Pressure from "./images/weather/pressure-icon.svg"
import Cloud from "./images/weather/cloudy.svg"
import WeatherDetails from './components/WeatherDetails'




function App() {

  const [icon, setIcon] = useState(Sunny)
  const [temp ,setTemp] = useState(0)
  const [city ,setCity] = useState("Chennai")
  return (
    <>
      <div className="container">
        <div className="input-container ">
          <input type="text" placeholder="Enter City" className="cityInput" />
          <div>
            <img src={SearchIcon} alt="search-icon" className="search-icon" />
          </div>
        </div>

        <WeatherDetails icon={icon} temp={temp} city={city}/>
      </div>
    </>
  );
}

export default App
