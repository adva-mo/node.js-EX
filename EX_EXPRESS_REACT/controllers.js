import { getCityCoordinates, getWeather } from "./utils.js";

export const getCityWeather = async (req, res) => {
  const { city } = req.params;
  const coords = await getCityCoordinates(city);
  const weather = await getWeather(coords);
  res.json(weather);
};
