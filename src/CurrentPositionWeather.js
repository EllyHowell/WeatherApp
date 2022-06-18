// Called once the geolation successfully gathers position and updates the current info
function GetCurrentInfo(pos) {
  let latitude = pos.coords.latitude;
  let longitude = pos.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${pageData.apiKey}&units=${pageData.metricUnit}`;

  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        SetLocation(response.data.name);
        SetTodaysTemperatures(response);
        SetWeatherIconAndDesc(response.data.weather[0]);

        getForecast(response.data.coord);
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
}

// Gathers the current locator with a navigator then calls update info function
function getCurrentInfo() {
  navigator.geolocation.getCurrentPosition(GetCurrentInfo);
}
