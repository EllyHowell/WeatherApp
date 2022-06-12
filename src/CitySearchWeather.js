// Redirects to search for city when hitting enter
function SearchCityNameKeyPress(event) {
  if (event.key === "Enter") {
    SearchCityName();
  }
}

// Gathers the city name inputed in the search bar and calls the API
function SearchCityName() {
  let search = document.getElementById("citySearch");
  SetCityInfo(search.value);
  search.value = "";
}

// Called once a city name has been searched and updates the current info (if city name is valid)
function SetCityInfo(searchValue) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${pageData.apiKey}&units=${pageData.metricUnit}`;
  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        SetLocation(searchValue);
        SetTodaysTemperatures(response);
        SetTodaysHumidity(response);
        SetTodaysWind(response);
        SetWeatherIconAndDesc(response.data.weather[0].description);
      }
    })
    .catch(function (error) {
      if (searchValue) {
        alert(`'${searchValue}' is not a valid city name`);
      } else {
        alert("Please enter a valid city name");
      }
    });
}
