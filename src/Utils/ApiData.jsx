const ApiData = async (city) => {
  let api_Key = "9c40849c4a0c1a40fadefb5fa71f882e";
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_Key}&units=metric`
    );
    const data = await response.json();
    return data;
    
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally block");
  }
};

export default ApiData;
