/* eslint-disable react/prop-types */
const WeatherDetails = ({icon , temp , city}) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="sunny" />
      </div>
      <div className="temp">{temp}°C</div>
      <div className="location">{city}</div>
    </>
  );
}

export default WeatherDetails