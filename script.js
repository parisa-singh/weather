const API_KEY = 'e17f308cb104bf1f4c8b8f0bf06ee7dc'; 
const city = 'London'; // Default city

// Fetch weather data
async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${e17f308cb104bf1f4c8b8f0bf06ee7dc
  }&units=metric`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Update the UI with weather data
function updateUI(data) {
  const location = data.name;
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].main;

  document.getElementById('location').textContent = location;
  document.getElementById('temperature').textContent = `${temperature}°C`;
  document.getElementById('condition').textContent = condition;

  updateBackground(condition);
}

// Update the background based on weather condition
function updateBackground(condition) {
  const app = document.getElementById('app');
  app.className = ''; // Reset classes
  app.classList.add(`${condition.toLowerCase()}-background`);
}

// Initialize the app
fetchWeather();