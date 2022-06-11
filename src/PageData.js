const pageData = {
  apiKey: "ec0987e51327b0329abfc539a3523b0a",
  currentCity: "Athens",
  metric: "celsius",
  metricSuffix: "°C",
  metricUnit: "metric",

  get getWindSuffix() {
    return this.metricUnit === "metric" ? " m/s" : " mph";
  },
};

// Method called when metric type has changes
function UpdateTemperatureType() {
  UpdateMetricType(); // Update the page variables
  SetCityInfo(pageData.currentCity);
}

// Update Metric Type button string and returns the new metric type
function UpdateMetricType() {
  let metricChangeButton = document.getElementById("metricButton");

  if (pageData.metric === "celsius") {
    pageData.metric = "fahrenheit";
    pageData.metricSuffix = "°F";
    pageData.metricUnit = "imperial";
    metricChangeButton.innerHTML = pageData.metricSuffix;
  } else {
    pageData.metric = "celsius";
    pageData.metricSuffix = "°C";
    pageData.metricUnit = "metric";
    metricChangeButton.innerHTML = pageData.metricSuffix;
  }
}
