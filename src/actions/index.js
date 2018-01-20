import axios from 'axios';

const API_KEY = 'b441a6ceb682e6d4997c3fbd50d17ef7';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//https://api.openweathermap.org/data/2.5/weather?q=Los_Angeles&appid=b441a6ceb682e6d4997c3fbd50d17ef7

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}