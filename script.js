async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "6c6b390404a4be1cc0288bafd4db65ff"; // Replace this

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    document.getElementById("weatherResult").innerHTML = "City not found!";
    return;
  }

  const data = await response.json();
  const weather = `
    <h2>${data.name}, ${data.sys.country}</h2>
    <p><strong>Weather:</strong> ${data.weather[0].main}</p>
    <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
    <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
  `;
  document.getElementById("weatherResult").innerHTML = weather;
}
