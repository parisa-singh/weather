# Weather Website

A simple and interactive weather website that fetches real-time weather data for any city using the OpenWeatherMap API. The website dynamically updates the background image based on the current weather conditions.

![Weather Website Screenshot](assets/screenshot.png) 

---

## Features

- **Real-Time Weather Data**: Fetches current weather conditions (temperature, weather condition, and location) for any city.
- **Dynamic Backgrounds**: Changes the background image based on the weather condition (e.g., sunny, rainy, snowy).
- **User-Friendly Interface**: Simple input field to search for a city and display weather information.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

---

## Technologies Used

- **Frontend**:
  - HTML5
  - CSS3
  - JavaScript (ES6)
- **API**:
  - [OpenWeatherMap API](https://openweathermap.org/api) for weather data.
- **Tools**:
  - Git for version control.
  - Visual Studio Code as the code editor.

---

## Setup Instructions

### Prerequisites

1. **API Key**:
   - Sign up for a free API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Replace the `API_KEY` placeholder in `script.js` with your actual API key:
     ```javascript
     const API_KEY = 'YOUR_API_KEY_HERE';
     ```

2. **Image Assets**:
   - Download weather-related images (e.g., `clear.jpg`, `rain.jpg`, `snow.jpg`) and place them in the `assets` folder. Ensure the file names match the ones referenced in the CSS.

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/weather-website.git