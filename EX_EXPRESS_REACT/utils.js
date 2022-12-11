import axios from "axios";
const wheatherApiKey = "72f1e697d6e7311ea64d8c29f3c8330f";

export const fetchData = async (url) => {
  try {
    const data = await axios.get(url);
    return data;
  } catch (e) {
    console.log("error here");
  }
};

export const getCityCoordinates = async (cityName) => {
  try {
    const cityData = await fetchData(
      `HTTPS://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${wheatherApiKey}`
    );
    const lat = cityData.data[0].lat.toFixed(2);
    const lon = cityData.data[0].lon.toFixed(2);
    return [lat, lon];
  } catch (e) {
    console.log(e);
  }
};

export const getWeather = async (coords) => {
  try {
    const res = await fetchData(
      `HTTPS://api.openweathermap.org/data/2.5/weather?lat=${coords[0]}&lon=${coords[1]}&appid=${wheatherApiKey}`
    );
    const tempNow = ((273 - res.data.main.temp) * -1).toFixed(0);
    const tempFeelsLike = ((273 - res.data.main.feels_like) * -1).toFixed(0);
    return { now: tempNow, feels: tempFeelsLike };
  } catch (e) {
    console.log(e);
  }
};
