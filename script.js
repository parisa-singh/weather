const API_KEY = 'e17f308cb104bf1f4c8b8f0bf06ee7dc'; // Replace with your secured API key

// Function to fetch weather data
async function fetchWeather(city) {
  if (!city) {
    updateError("Please enter a city name!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found!");
    }

    const data = await response.json();
    updateUI(data);
  } catch (error) {
    updateError(error.message);
  }
}

// Function to update UI with weather data
function updateUI(data) {
  const location = data.name;
  const temperature = Math.round(data.main.temp);
  const condition = data.weather[0].description; // More detailed description
  const iconCode = data.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  document.getElementById('location').textContent = location;
  document.getElementById('temperature').textContent = `${temperature}°C`;
  document.getElementById('condition').textContent = condition;
  
  const weatherIcon = document.getElementById('weatherIcon');
  weatherIcon.src = iconUrl;
  weatherIcon.style.display = "block";

  updateBackground(condition);
}

// Function to handle errors
function updateError(message) {
  document.getElementById('location').textContent = message;
  document.getElementById('temperature').textContent = '-';
  document.getElementById('condition').textContent = '-';
  document.getElementById('weatherIcon').style.display = "none";
}

// Function to update background based on weather
function updateBackground(condition) {
  const app = document.getElementById('app');

  const weatherImages = {
    "clear sky": "assets/clear.jpg",
    "few clouds": "assets/few-clouds.jpg",
    "scattered clouds": "assets/cloudy.jpg",
    "broken clouds": "assets/overcast.jpg",
    "overcast clouds": "assets/overcast.jpg",
    "light rain": "assets/light-rain.jpg",
    "moderate rain": "assets/rain.jpg",
    "heavy intensity rain": "assets/heavy-rain.jpg",
    "thunderstorm": "assets/thunderstorm.jpg",
    "snow": "assets/snow.jpg",
    "mist": "assets/mist.jpg",
    "fog": "assets/fog.jpg",
    "haze": "assets/haze.jpg",
    "dust": "assets/dust.jpg",
    "smoke": "assets/smoke.jpg",
    "tornado": "assets/tornado.jpg"
  };

  app.style.backgroundImage = `url(${weatherImages[condition] || 'assets/default.jpg'})`;
}

// Event listener for search button
document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  fetchWeather(city);
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
