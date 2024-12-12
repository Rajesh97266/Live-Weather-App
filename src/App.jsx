import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./images/weather/search-icon.svg";
import Sunny from "./images/weather/sunny.svg";
import WeatherDetails from "./components/WeatherDetails";
import ApiData from "./Utils/ApiData";

function App() {
  const [icon, setIcon] = useState(Sunny);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [text, setText] = useState("Chennai");

  const [cityNotFound, setCityNotFound] = useState(false); // Track invalid city
  const [loading, setLoading] = useState(false); // Track loading state

  const handleCity = (e) => {
    setText(e.target.value);
  };

  const fetchWeather = async (city) => {
    setLoading(true); // Start loading
    setCityNotFound(false); // Reset city not found
    try {
      const data = await ApiData(city);
      if (data.cod === "404") {
        // Handle invalid city case
        setCityNotFound(true);
        setLoading(false);
        return;
      }

      // Update state with valid data
      setTemp(data.main.temp);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setIcon(
        `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setCityNotFound(true); // Treat as city not found in case of API error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(text); // Fetch weather on initial load
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather(text);
      setText("");
    }
  };

  const handleSearch = () => {
    fetchWeather(text);
    setText("");
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter City"
            className="cityInput"
            onChange={handleCity}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div>
            <img
              src={SearchIcon}
              alt="search-icon"
              className="search-icon"
              onClick={handleSearch}
            />
          </div>
        </div>

        {/* Show loading or city not found messages */}
        {cityNotFound && (
          <p className="error">City not found. Please try again.</p>
        )}

        {/* Render WeatherDetails, passing loading state */}
        <WeatherDetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          log={log}
          humidity={humidity}
          wind={wind}
          loading={loading}
        />

        <p className="design">
          Designed by <span>Rajesh Mahendran</span>
        </p>
      </div>
    </>
  );
}

export default App;
