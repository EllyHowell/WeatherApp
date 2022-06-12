// Sets the welcome message depending on the current time
function setWelcomeMessage() {
  let hour = new Date().getHours();
  let welcomeMessgae = document.getElementById("welcomeMessage");

  if (hour > 0 && hour <= 12) {
    welcomeMessgae.innerHTML = "Good Morning";
  } else if (hour > 12 && hour <= 18) {
    welcomeMessgae.innerHTML = "Good Afternoon";
  } else {
    welcomeMessgae.innerHTML = "Good Evening";
  }
}

// Set todays temperature (high and low) from the response from API
function SetTodaysTemperatures(response) {
  let todaysTempHighDisplay = document.getElementById("day0_tempHigh");
  let todaysTempLowDisplay = document.getElementById("day0_tempLow");

  todaysTempHighDisplay.innerHTML =
    Math.round(response.data.main.temp_max) + pageData.metricSuffix;

  // Set low temperature
  todaysTempLowDisplay.innerHTML =
    Math.round(response.data.main.temp_min) + pageData.metricSuffix;
}

// Sets todays wind from the reponse from API
function SetTodaysWind(response) {
  let todayWindDisplay = document.getElementById("day0_wind");
  todayWindDisplay.innerHTML =
    Math.round(response.data.wind.speed) + pageData.getWindSuffix;
}

// Sets todays humidity from the response from API
function SetTodaysHumidity(response) {
  console.log(response.data.main);
  let todayHumidityDisplay = document.getElementById("day0_humidity");
  todayHumidityDisplay.innerHTML = response.data.main.humidity + "%";
}

// Sets the location displayed and stores in the page data
function SetLocation(cityName) {
  let locationDisplay = document.getElementById("location");
  locationDisplay.innerHTML = cityName.toUpperCase();

  pageData.currentCity = cityName;
}
