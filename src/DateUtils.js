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

  setFutureDates();
}

// Sets the upcoming dates along with the date and day
function setFutureDates() {
  let todayDate = new Date();
  for (let i = 1; i < 7; i++) {
    let dayElement = document.getElementById(`day${i}_day`);
    let dateElement = document.getElementById(`day${i}_date`);

    let d = new Date(todayDate.setDate(todayDate.getDate() + 1));

    dayElement.innerHTML = getDayName(d.getDay()).toUpperCase();

    let date = ("0" + d.getDate()).slice(-2);
    let month = ("0" + (d.getMonth() + 1)).slice(-2);
    dateElement.innerHTML = `${date}/${month}`;
  }
}
