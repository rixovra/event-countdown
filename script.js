
let countdownTimer;

function startCountdown() {
  clearInterval(countdownTimer);
  const userDate = document.getElementById("eventInput").value;
  const eventTime = new Date(userDate).getTime();

  if (isNaN(eventTime)) {
    document.getElementById("countdown").innerHTML = "Please select a valid date.";
    return;
  }

  countdownTimer = setInterval(function () {
    const now = new Date().getTime();
    const timeLeft = eventTime - now;

    if (timeLeft < 0) {
      clearInterval(countdownTimer);
      document.getElementById("countdown").innerHTML = "Event started!";
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML =
      days + "Days " + hours + "Hours " + minutes + "Minutes " + seconds + "Seconds";
  }, 1000);
}
