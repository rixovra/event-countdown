let events = [];

window.onload = function () {
  document.getElementById("addEventBtn").onclick = addEvent;
};

function addEvent() {
  let name = document.getElementById("eventNameInput").value;
  let date = document.getElementById("eventInput").value;

  if (!date) {
    alert("Please choose a date!");
    return;
  }

  if (!name) {
    name = "Untitled Event";
  }

  events.push({ name: name, date: date });
  showEvents();

  document.getElementById("eventNameInput").value = "";
  document.getElementById("eventInput").value = "";
}

function showEvents() {
  let box = document.getElementById("eventsList");
  box.innerHTML = "";

  let today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < events.length; i++) {
    let event = events[i];
    let eventDate = new Date(event.date);
    eventDate.setHours(0, 0, 0, 0);

    let days = Math.floor((eventDate - today) / (1000 * 60 * 60 * 24));

    let text = "";
    if (days > 0) {
      text = "D - " + days;
    } else if (days < 0) {
      text = "D + " + Math.abs(days);
    } else {
      text = "D - DAY!";
    }

    let div = document.createElement("div");
    div.className = "event";
    div.innerHTML = "<h2>" + event.name + "</h2><p>" + text + "</p>";

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.onclick = function () {
      events.splice(i, 1);
      showEvents();
    };

    div.appendChild(delBtn);
    box.appendChild(div);
  }
}
