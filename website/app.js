/* Global Variables */
/** API URL */
const baseURL = "http://api.openweathermap.org/data/2.5/weather?"; //zip=11001&appid=46bc70c10b6d379d5c6cd615514a3d82";
/** API Key */
const key = "46bc70c10b6d379d5c6cd615514a3d82";

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + "." + d.getDate() + "." + d.getFullYear();

// Event listener
document.getElementById("generate").addEventListener("click", generateCallBack);
function generateCallBack(e) {}

// Fetch functions

/**
 * Get weather data for a specific region using its ZIP code from the external API provider.
 * @param {*} zip The ZIP code to fetch its weather data.
 * @param {*} apiKey The API key for the weather service.
 * @returns Weather data.
 */
const getWeatherData = async (zip, apiKey) => {
  const res = await fetch(`${baseURL}zip=${zip}&appid=${apiKey}`);
  try {
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get weather data from the internal endpoint and update the UI with the values.
 */
const updateUIFromEndPoint = async () => {
  const res = await fetch("/get-weather-data");
  try {
    const data = await res.json();
    document.getElementById("temp").innerHTML = data.temprature;
    document.getElementById("date").innerHTML = data.date;
    document.getElementById("content").innerHTML = data.content;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (url = "", data = {}) => {
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  try {
    const newData = await res.json();
    return newData;
  } catch (error) {
    console.log(error);
  }
};
