function startCountdown() {
    const userDate = document.getElementById("eventInput").value;
    const eventTime = new Date(userDate).setHours(0, 0, 0, 0); // Ignore time part
    const now = new Date().setHours(0, 0, 0, 0); // Current day, midnight
  
    if (isNaN(eventTime)) {
      document.getElementById("countdown").innerHTML = "Please select a valid date.";
      return;
    }
  
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = Math.floor((eventTime - now) / oneDay);
  
    if (diff > 0) {
      document.getElementById("countdown").innerHTML = diff + " day(s) left until the event.";
    } else if (diff < 0) {
      document.getElementById("countdown").innerHTML = Math.abs(diff) + " day(s) have passed since the event.";
    } else {
      document.getElementById("countdown").innerHTML = "The event is today!";
    }
  }
  