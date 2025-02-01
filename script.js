const API_KEY = 'e17f308cb104bf1f4c8b8f0bf06ee7dc'; 
const city = 'London'; // Default city

// Fetch weather data
async function fetchWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('location').textContent = 'Error loading weather';
  }
}

// Update the UI with weather data
function updateUI(data) {
  const location = data.name;
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].main.toLowerCase(); 

  document.getElementById('location').textContent = location;
  document.getElementById('temperature').textContent = `${temperature}°C`;
  document.getElementById('condition').textContent = condition;

  updateBackground(condition);
}

// Update the background based on weather condition
function updateBackground(condition) {
  const app = document.getElementById('app');
  app.className = ''; // Reset previous classes

  const weatherConditions = ['rain', 'clear', 'snow', 'clouds'];

  if (weatherConditions.includes(condition)) {
    app.classList.add(`${condition}-background`);
  } else {
    app.classList.add('default-background'); // Fallback background
  }
}

// Initialize the app
fetchWeather();
