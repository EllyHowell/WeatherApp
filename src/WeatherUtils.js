// Sets the weather icon depending the given description
function SetWeatherIconAndDesc(description) {
  let weatherIcon = document.getElementById("day0_icon");
  let desc = document.getElementById("day0_desc");

  switch (description) {
    case "clear sky":
      weatherIcon.src = "icons/icons8-sun.gif";
      break;
    case "few clouds":
    case "broken clouds":
    case "scattered clouds":
      weatherIcon.src = "icons/icons8-partly-cloudy-day.gif";
      break;
    case "shower rain":
      weatherIcon.src = "icons/icons8-light-rain.gif";
      break;
    case "rain":
      weatherIcon.src = "icons/icons8-rain.gif";
      break;
    case "thunderstorm":
      weatherIcon.src = "icons/icons8-storm.gif";
      break;
    case "snow":
      weatherIcon.src = "icons/icons8-light-snow.gif";
      break;
    case "mist":
      weatherIcon.src = "icons/icons8-haze.gif";
      break;
    default:
      throw new error(`'${description}' was not a valid description`);
  }

  weatherIcon.alt = description;
  desc.innerHTML = description;
}
