/* Global Variables */
/** API URL */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?"; //zip=11001&appid=46bc70c10b6d379d5c6cd615514a3d82";
/** API Key */
const key = "46bc70c10b6d379d5c6cd615514a3d82";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Event listener
document.getElementById("generate").addEventListener("click", generateCallBack);
function generateCallBack(e) {
  let data = getWeatherData(11004, key);
  console.log(data);
}

// Fetch functions

/**
 * Get weather data for a specific region using its ZIP code.
 * @param {*} zip The ZIP code to fetch its weather data.
 * @param {*} apiKey The API key for the weather service.
 * @returns Weather data.
 */
const getWeatherData = async (zip, apiKey) => {
  const res = await fetch(`${baseURL}zip=${zip}&appid=${apiKey}`);
  try {
    const data = await res.json();
    return data;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
