const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const appid = "b12c7de6613c93a9134a9d351dffa658";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkweather(city) {
  const response = await fetch(url + city + `&appid=${appid}`);
  var data = await response.json();

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    weatherIcon.src = `images/${data.weather[0].main}.png`;

    document.querySelector(".error").style.display = "none";
    document.querySelector(".weather").style.display = "block";
  }
}

searchButton.addEventListener("click", () => {
  checkweather(searchBox.value);
});
