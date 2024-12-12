/* eslint-disable react/prop-types */
import Humidity from "../images/weather/humidity-icon.svg"
import Wind from "../images/weather/wind-icon.svg"
const WeatherDetails = ({ icon, temp, city, country, lat, log , humidity ,wind }) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="sunny" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
      <div className="country">{country}</div>
      <div className="cord">
        <div>
          <span className="lat">Latitude</span>
          <span>{lat}</span>
        </div>
        <div>
          <span className="log">Longitude</span>
          <span>{log}</span>
        </div>
      </div>
      <div className="data-container">
        <div className="element">
          <img src={Humidity} alt="humidity" className="icon" />
          <div className="data">
            <div className="humidity-percent">{humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind} alt="wind" className="icon" />
          <div className="data">
            <div className="humidity-percent">{wind} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
