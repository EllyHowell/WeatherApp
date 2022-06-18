// Adds a number of days to a given date
function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

// If it is the first or last forecase container, add padding ID
// This ensures that the cells match the width of the table
function getPaddingIdHTML(dayIndex) {
  let paddingId = "";
  if (dayIndex === 1) {
    paddingId = `id="firstForecastContainer"`;
  } else if (dayIndex === 6) {
    paddingId = `id="finalForecastContainer"`;
  }
  return paddingId;
}

// Gets the day name of the given date in the future
function getFutureDay(dayIndex) {
  return getDayName(addDays(new Date(), dayIndex).getDay());
}

// Gets the formatted date of the given date in the future
function getFutureDate(dayIndex) {
  let d = addDays(new Date(), dayIndex);

  let month = d.getMonth();
  let date = d.getDate();

  return `${date < 10 ? "0" + date : date} / ${
    month < 10 ? "0" + month : month
  }`;
}

// This method will display all the data for future forecasts
function displayForecast(response) {
  let forecastContainer = document.getElementById("forecast");
  console.log(response.data.daily[0]);
  forecastContainer.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    var forecastDay = response.data.daily[i];
    let forecastHTML = `
            <div ${getPaddingIdHTML(i)} class="col">
            <div id="day${i}" class="forecastContainer">
              <div id="day${i}_day" class="bold">${getFutureDay(i)}</div>
              <div id="day${i}_date">${getFutureDate(i)}</div>
              <img id="day${i}_icon" src="${getWeatherIconFromMain(
      forecastDay.weather[0].main
    )}" width="70" alt="${forecastDay.weather[0].main}"/>
              <div>
                <span id="day${i}_tempHigh" class="bold">${
      Math.round(forecastDay.temp.max) + pageData.metricSuffix
    }</span>
                <span id="day${i}_tempLow">${
      Math.round(forecastDay.temp.min) + pageData.metricSuffix
    }</span>
              </div>
            </div>
          </div>`;
    forecastContainer.innerHTML += forecastHTML;
  }
}

// Gets the future forecast API request return
function getForecast(coords) {
  let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&appid=${pageData.apiKey}&units=${pageData.metricUnit}`;

  axios
    .get(url)
    .then((response) => {
      if (response.status === 200) {
        displayForecast(response);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
