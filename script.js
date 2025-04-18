function addEvent() {
    const userDate = document.getElementById("eventInput").value;
    const userName = document.getElementById("eventNameInput").value || "Untitled Event";
  
    if (!userDate) {
      alert("Please select a valid date.");
      return;
    }
  
    const eventDate = new Date(userDate);
    eventDate.setHours(0, 0, 0, 0);
  
    const today = new Date();
    today.setHours(0, 0, 0, 0);
  
    const oneDay = 1000 * 60 * 60 * 24;
    const diff = Math.floor((eventDate - today) / oneDay);
  
    let countdownText = "";
    if (diff > 0) {
      countdownText = "D - " + diff;
    } else if (diff < 0) {
      countdownText = "D + " + Math.abs(diff);
    } else {
      countdownText = "D - DAY!";
    }
  
    // Create event block
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
  
    // Add event name
    const title = document.createElement("h2");
    title.textContent = userName;
    eventDiv.appendChild(title);
  
    // Add countdown
    const countdown = document.createElement("div");
    countdown.textContent = countdownText;
    countdown.style.marginTop = "10px";
    countdown.style.fontSize = "40px";
    countdown.style.color = "#d0eaff";
    eventDiv.appendChild(countdown);
  
    // Add to page
    document.getElementById("eventsList").appendChild(eventDiv);
  
    // Reset input
    document.getElementById("eventNameInput").value = "";
    document.getElementById("eventInput").value = "";
}
  