const API_KEY = 'e17f308cb104bf1f4c8b8f0bf06ee7dc'; 

// Function to fetch weather data
async function fetchWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    document.getElementById('location').textContent = 'City not found!';
    document.getElementById('temperature').textContent = '';
    document.getElementById('condition').textContent = '';
  }
}

// Function to update UI with weather data
function updateUI(data) {
  const location = data.name;
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].main.toLowerCase();

  document.getElementById('location').textContent = location;
  document.getElementById('temperature').textContent = '${temperature}°C';
  document.getElementById('condition').textContent = condition;

  updateBackground(condition);
}

// Function to update background based on weather
function updateBackground(condition) {
  const app = document.getElementById('app');
  app.className = ''; // Reset previous classes

  const weatherConditions = {
    rain: 'rain-background',
    clear: 'clear-background',
    snow: 'snow-background',
    clouds: 'clouds-background',
    fog: 'fog-background'
  };

  // If condition matches a known type, update background
  app.classList.add(weatherConditions[condition] || 'default-background');
}

// Event listener for search button
document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Allow Enter key to trigger search
document.getElementById('cityInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    document.getElementById('searchBtn').click();
  }
});

// Initialize with default city
fetchWeather('Amherst');