let apiKey = "ec0987e51327b0329abfc539a3523b0a";

let metric = "celsius";
let metricSuffix = "°C";
let currentCity = "London";

let todaysTemp = document.querySelector(".todaysTemp");
let todaysDesc = document.querySelector(".weatherDesc");
let cityDisplay = document.querySelector(".cityName");

// Returns string value of the day
function getDayName(dayValue) {
  let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayNames[dayValue];
}

// Returns string value of the month
function getMonthName(monthValue) {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthValue];
}

// Gets the current day and time and displays the value
function setDateTimes() {
  let dateTimeNow = document.querySelector(".dateTimeNow");
  let date = new Date();

  dateTimeNow.innerHTML = `${getDayName(date.getDay())},
  ${date.getHours()}:${date.getMinutes()}`;

  setFutureDates();
}

// Returns the appropriate suffix for the date
function getDateSuffix(value) {
  let lastChar = value.toString().slice(-1);
  switch (lastChar) {
    case "1":
      return "st";
    case "2":
      return "nd";
    case "3":
      return "rd";
    default:
      return "th";
  }
}

// Sets the upcoming dates along with the date and day
function setFutureDates() {
  let todayDate = new Date();
  for (let i = 0; i < 5; i++) {
    let dayElement = document.querySelector(`.day${i} .dateDay`);
    let dateElement = document.querySelector(`.day${i} .date`);

    let d = new Date(todayDate.setDate(todayDate.getDate() + 1));

    dayElement.innerHTML = getDayName(d.getDay()).toUpperCase();
    dateElement.innerHTML = `${d.getDate()}${getDateSuffix(
      d.getDate()
    )} ${getMonthName(d.getMonth())}`;
  }
}

// Gathers the city name inputed in the search bar and calls the API
function SearchCityName() {
  let search = document.querySelector(".citySearch");
  SetCityInfo(search.value);
  search.value = "";
}

// Called once the geolation successfully gathers position and updates the current info
function GetCurrentInfo(pos) {
  let latitude = pos.coords.latitude;
  let longitude = pos.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${getUnitParameter()}`;

  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        todaysDesc.innerHTML = response.data.weather[0].description;
        todaysTemp.innerHTML =
          Math.round(response.data.main.temp) + metricSuffix;

        currentCity = response.data.name.toUpperCase();
        cityDisplay.innerHTML = currentCity;
      }
    })
    .catch(function (error) {
      alert(`'${searchValue}' is not a valid city name`);
    });
}

// Gathers the current locator with a navigator then calls update info function
function getCurrentInfo() {
  navigator.geolocation.getCurrentPosition(GetCurrentInfo);
}

// Called once a city name has been searched and updates the current info (if city name is valid)
function SetCityInfo(searchValue) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=${apiKey}&units=${getUnitParameter()}`;

  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        todaysDesc.innerHTML = response.data.weather[0].description;
        todaysTemp.innerHTML =
          Math.round(response.data.main.temp) + metricSuffix;

        cityDisplay.innerHTML = searchValue.toUpperCase();
        currentCity = searchValue;
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

function getUnitParameter() {
  return metric == "celsius" ? "metric" : "imperial";
}

// Sets the welcome message depending on the current time
function setWelcomeMessage() {
  let hour = new Date().getHours();
  let welcomeMessgae = document.querySelector("#welcomeMessage");
  if (hour > 0 && hour <= 12) {
    welcomeMessgae.innerHTML = "Good Morning";
  } else if (hour > 12 && hour <= 18) {
    welcomeMessgae.innerHTML = "Good Afternoon";
  } else {
    welcomeMessgae.innerHTML = "Good Evening";
  }
}

// Update Metric Type button string and returns the new metric type
function UpdateMetricType() {
  let metricChangeButton = document.querySelector(".metricChange");
  if (metric === "celsius") {
    metric = "fahrenheit";
    metricSuffix = "°F";
    metricChangeButton.innerHTML = metricSuffix;
  } else {
    metric = "celsius";
    metricSuffix = "°C";
    metricChangeButton.innerHTML = metricSuffix;
  }
}

// Setups the default temperature data
function setDefaultData() {
  SetCityInfo(currentCity);

  for (let i = 0; i < 5; i++) {
    let dayTemp = document.querySelector(`.day${i} .dayTemp`);
    let randomTemp = Math.floor(Math.random() * (38 - 8)) + 8;
    dayTemp.innerHTML = `${randomTemp}°C`;
    dayTemp.setAttribute("temp", randomTemp);
  }
}

// Method called when metric type has changes
function UpdateTemperatureType() {
  UpdateMetricType(); // Update the page variables
  SetCityInfo(currentCity);
}

// General setup
setWelcomeMessage();
setDefaultData();
setDateTimes();

// Metric Button
let metricChangeButton = document.querySelector(".metricChange");
metricChangeButton.innerHTML = metricSuffix;
metricChangeButton.addEventListener("click", UpdateTemperatureType);

// City Search
let searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", SearchCityName);

// Current Button
let currentButton = document.querySelector(".currentButton");
currentButton.addEventListener("click", getCurrentInfo);
