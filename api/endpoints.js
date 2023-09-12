const API_KEY="53f28917cbf7fc1adb76768c38edc16a";

function getCurrentState(city){
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}

function getForecastState(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}
