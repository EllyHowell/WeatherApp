// Returns string value of the day
function getDayName(dayValue) {
  let dayNames = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];
  return dayNames[dayValue];
}

// Gets the current day and time and displays the value
function setDateTimes() {
  let todayTime = document.getElementById("day0_time");
  let todayDay = document.getElementById("day0_day");

  let date = new Date();
  todayTime.innerHTML = `${date.getHours()}:${date.getMinutes()}`;
  todayDay.innerHTML = `${getDayName(date.getDay())}`;
}
