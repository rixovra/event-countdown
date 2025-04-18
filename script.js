document.addEventListener("DOMContentLoaded", loadEvents);

function addEvent() {
  const userDate = document.getElementById("eventInput").value;
  const userName = document.getElementById("eventNameInput").value || "Untitled Event";

  if (!userDate) {
    alert("Please select a valid date.");
    return;
  }

  const events = getStoredEvents();
  events.push({ name: userName, date: userDate });
  saveEvents(events);
  renderEvents();
  document.getElementById("eventNameInput").value = "";
  document.getElementById("eventInput").value = "";
}

document.getElementById("addEventBtn").addEventListener("click", addEvent);

function loadEvents() {
  renderEvents();
}

function renderEvents() {
  const events = getStoredEvents();
  events.sort((a, b) => new Date(a.date) - new Date(b.date));

  const container = document.getElementById("eventsList");
  container.innerHTML = "";

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const oneDay = 1000 * 60 * 60 * 24;

  events.forEach((event, index) => {
    const eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);
    const diff = Math.floor((eventDate - today) / oneDay);

    let countdownText = "";
    if (diff > 0) {
      countdownText = "D - " + diff;
    } else if (diff < 0) {
      countdownText = "D + " + Math.abs(diff);
    } else {
      countdownText = "D - DAY!";
    }

    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");

    const title = document.createElement("h2");
    title.textContent = event.name;
    eventDiv.appendChild(title);

    const countdown = document.createElement("div");
    countdown.textContent = countdownText;
    countdown.style.marginTop = "10px";
    countdown.style.fontSize = "40px";
    countdown.style.color = "#d0eaff";
    eventDiv.appendChild(countdown);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginTop = "10px";
    deleteBtn.onclick = () => deleteEvent(index);
    eventDiv.appendChild(deleteBtn);

    container.appendChild(eventDiv);
  });
}

function deleteEvent(index) {
  const events = getStoredEvents();
  events.splice(index, 1);
  saveEvents(events);
  renderEvents();
}

function getStoredEvents() {
  return JSON.parse(localStorage.getItem("events") || "[]");
}

function saveEvents(events) {
  localStorage.setItem("events", JSON.stringify(events));
}