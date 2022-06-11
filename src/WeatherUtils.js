// Sets the weather icon depending the given description
function SetWeatherIcon(description) {
  let weatherIcon = document.getElementById("day0_icon");
  switch (description) {
    case "clear sky":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/clear-day.svg";
      break;
    case "few clouds":
    case "broken clouds":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/overcast.svg";
      break;
    case "scattered clouds":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/cloudy.svg";
      break;
    case "shower rain":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/drizzle.svg";
      break;
    case "rain":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/rain.svg";
      break;
    case "thunderstorm":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/thunderstorms.svg";
      break;
    case "snow":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/snow.svg";
      break;
    case "mist":
      weatherIcon.src =
        "icons/weather-icons/design/fill/animation-ready/mist.svg";
      break;
    default:
      throw new error(`'${description}' was not a valid description`);
  }

  weatherIcon.alt = description;
}
