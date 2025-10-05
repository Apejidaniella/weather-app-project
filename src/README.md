
 SmartWeather – Smart Weather, Outfit Suggestions & Travel Packing Assistant

Overview

SmartWeather is a React-based web application that provides real-time weather updates and intelligent outfit recommendations based on user preferences.
The app combines live weather data with personalized settings (e.g., “I feel cold below 18°C”) to help users plan their day better.

Built as part of the **ALX Capstone Project**, it demonstrates frontend skills with React, TailwindCSS, and Zustand for efficient state management.

---

# Features

**Live Weather Data** – Fetches real-time weather from OpenWeatherMap API.
**Personalized Outfit Suggestions** – Recommends clothing based on user comfort levels.
**Preference Management** – Stores user preferences globally using Zustand.
**Responsive Design** – Styled with TailwindCSS for a clean, mobile-friendly interface.
**Dynamic UI Updates** – Weather and outfit suggestions update instantly without page reload.

---

### 🧰 Tech Stack

| Category           | Tools Used             |
| ------------------ | ---------------------- |
| Frontend Framework | **React (Vite)**       |
| Styling            | **TailwindCSS**        |
| State Management   | **Zustand**            |
| API Integration    | **OpenWeatherMap API** |
| Version Control    | **Git & GitHub**       |

---

### 🗂️ Project Structure

```
weather-sense/
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # App pages (Home, Settings, etc.)
│   ├── store/             # Zustand store for global state
│   ├── assets/            # Images, icons, etc.
│   ├── App.jsx            # Root component
│   └── main.jsx           # Entry point
│
├── public/                # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

### ⚙️ Setup & Installation

**To run locally:**

1. Clone the repository:

   ```bash
   git clone https://github.com/Apejidaniella/WEATHERAPP-PROJECT.git
   ```
2. Navigate into the project folder:

   ```bash
   cd weatherapp-project
   ```
3. Install dependencies:

   ```bash
   npm install
   ```
4. Run the app in development mode:

   ```bash
   npm run dev
   ```
5. Open your browser at the URL shown (http://localhost:5173/).

---

# Environment Variables

Create a `.env` file in the root directory and add your OpenWeatherMap API key:

```
VITE_WEATHER_API_KEY=your_api_key_here
```

---

#Key Components

* **WeatherCard.jsx:** Displays weather details for the selected location.
* **PreferenceForm.jsx:** Collects and stores user comfort settings.
* **store/weatherStore.js:** Handles global state with Zustand.
* **App.jsx:** Manages overall structure and routing.

---

# Future Improvements

* Add authentication (allow users to save preferences permanently).
* Implement dark/light theme toggle.
* Add “feels like” temperature and air quality index.
* Enable location-based weather auto-detection.

---

# Author

**Daniella Akpeji**
Frontend Developer | ALX Software Engineering Capstone 2025

---

# License

This project is open-sourced under the **MIT License**.

