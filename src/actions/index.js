// 6. Axios is a library as JQuery. We add its here to apply get request that takes data from JSON file.
//    JSON is just data format. Think about this as about data from internet
import axios from 'axios'; // npm install --save axios

const API_KEY = 'd6ae301398cd22a6c44139eaaf95c03a'; // api key from openweathermap.org
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'WETCH_WEATHER';

// 3. Here we add action controller that helps to provide a process of transporting data
//    Controller takes 'city' as parameter that will be passed to 'url' variable
export function fetchWeather(city) {
// 4. Here we add 'url' variable to stock link with data that represent for us in JSON format
    const url = `${ROOT_URL}&q=${city},us`;
// 5. Here we add 'request' variable to stock get request provided by 'axios' get method
    const request = axios.get(url);
// 7. At last we return data with 'type' and 'payload' that will be recognized in reducers
// To show what is happen 
// 17. To see full request we can print out this in console with 'console.log('Reauest:', request)' command
//     But firstly we want deal with reducer, so let's deep into reducer's files      
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}


