function startCountdown() {
    const userDate = document.getElementById("eventInput").value;
  
    if (!userDate) {
      document.getElementById("countdown").innerHTML = "Please select a valid date.";
      return;
    }
  
    const eventDate = new Date(userDate);
    eventDate.setHours(0, 0, 0, 0);
  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = Math.floor((eventDate - today) / oneDay);
  
    if (diff > 0) {
      document.getElementById("countdown").innerHTML = "D - " + diff ;
    } else if (diff < 0) {
      document.getElementById("countdown").innerHTML ="D + " + Math.abs(diff) ;
    } else {
      document.getElementById("countdown").innerHTML = "D - DAY!";
    }
}
    