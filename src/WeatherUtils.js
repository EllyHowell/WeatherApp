// Sets the weather icon depending the given description
function SetWeatherIconAndDesc(data) {
  console.log(data);
  let weatherIcon = document.getElementById("day0_icon");
  let desc = document.getElementById("day0_desc");

  weatherIcon.src = getWeatherIconFromMain(data.main);
  weatherIcon.alt = data.main;
  desc.innerHTML = data.description;
}

// Selects the corresponding icon from the given string
function getWeatherIconFromMain(main) {
  switch (main.toLowerCase()) {
    case "thunderstorm":
      return "icons/icons8-storm.gif";
    case "drizzle":
      return "icons/icons8-light-rain.gif";
    case "rain":
      return "icons/icons8-rain.gif";
    case "snow":
      return "icons/icons8-light-snow.gif";
    case "clear":
      return "icons/icons8-sun.gif";
    case "clouds":
      return "icons/icons8-partly-cloudy-day.gif";
    default:
      return "icons/icons8-haze.gif";
  }
}
