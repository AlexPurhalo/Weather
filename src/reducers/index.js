import { combineReducers } from 'redux';
//  20. To apply data coming we create WeatherReducer that takes data from reducer_weather.js
import WeatherReducer from './reducer_weather';

//  18. To make data coming available throw fetchWeather action we pass reducer that will handle this action
//      This reducer now takes WeatherReducer name and its setting we can see in reducer_weather.js file
const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
