// General setup
setWelcomeMessage();
SetCityInfo(pageData.currentCity);
setDateTimes();

// Metric Button
let metricChangeButton = document.getElementById("metricButton");
metricChangeButton.innerHTML = pageData.metricSuffix;
metricChangeButton.addEventListener("click", UpdateTemperatureType);

// City Search
let searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", SearchCityName);
let searchBar = document.getElementById("citySearch");
searchBar.addEventListener("keypress", SearchCityNameKeyPress);

// Current Button
let currentButton = document.getElementById("currentButton");
currentButton.addEventListener("click", getCurrentInfo);
