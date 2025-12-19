function formatTime(date) {
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function formatDataString(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const dateParts = new Intl.DateTimeFormat("en-US", options).formatToParts(
    date
  );
  const dayOfWeek = dateParts
    .find((p) => p.type === "weekday")
    .value.toUpperCase();
  const month = dateParts.find((p) => p.type === "month").value;
  const day = dateParts.find((p) => p.type === "day").value;

  return `${dayOfWeek}, ${month} ${day}`;
}

function getGreeting(date) {
  const hour = date.getHours();
  let timeOfDay;

  if (hour >= 5 && hour < 12) {
    timeOfDay = "Morning";
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = "Afternoon";
  } else {
    timeOfDay = "Evening";
  }
  return `Good ${timeOfDay}`;
}

function updateDateTime() {
  const now = new Date();

  const timeDisplay = document.getElementById("time-display");
  const dateDisplay = document.getElementById("date-display");
  const greetingElement = document.querySelector(".greeting span");

  if (timeDisplay) {
    timeDisplay.textContent = formatTime(now);
  }

  if (dateDisplay) {
    dateDisplay.textContent = formatDataString(now);
  }

  if (greetingElement) {
    greetingElement.textContent = getGreeting(now);
  }

  setTimeout(updateDateTime, 60000 - now.getSeconds() * 1000);
}

/*
todo code below 
*/
let todoList = document.getElementById("todo-items-list");

if (todoList) {
  let myNodeList = todoList.getElementsByTagName("LI");
  for (let i = 0; i < myNodeList.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
  }
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.getElementById("todo-items-list");

if (list) {
  list.addEventListener(
    "click",
    function (ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
        saveTask();
      }
    },
    false
  );
}

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("new-task-input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("todo-items-list").appendChild(li);
    saveTask();
  }
  document.getElementById("new-task-input").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
    saveTask();
  };
}

function loadTasks() {
  const todoList = document.getElementById("todo-items-list");
  const storedTasks = localStorage.getItem("tasks") || "[]";
  const task = JSON.parse(storedTasks);

  task.forEach((task) => {
    let li = document.createElement("li");
    let text = document.createTextNode(task.text);
    li.appendChild(text);

    if (task.checked) {
      li.classList.add("checked");
    }

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    todoList.appendChild(li);

    span.onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";

      saveTask();
    };
  });
}

function saveTask() {
  const todoList = document.getElementById("todo-items-list");
  const listItems = todoList.getElementsByTagName("LI");
  const taskToStore = [];

  for (let i = 0; i < listItems.length; i++) {
    const item = listItems[i];

    if (item.style.display !== "none") {
      taskToStore.push({
        text: item.firstChild.textContent.trim(),
        checked: item.classList.contains("checked"),
      });
    }
  }

  localStorage.setItem("tasks", JSON.stringify(taskToStore));
}

/*
code for bible verse below
*/
const API_URL = "https://labs.bible.org/api/?passage=random&type=json";
const verseContainer = document.getElementById("verse-container");
const fetchButton = document.getElementById("fetch-button");

async function fetchVerse() {
  verseContainer.innerHTML = "Loading random verse...";
  fetchButton.disabled = true;

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API returned an error: ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error("API returned no verse data.");
    }

    const verseData = data[0];

    const verseText = verseData.text;
    const bookName = verseData.bookname;
    const chapter = verseData.chapter;
    const verse = verseData.verse;

    const reference = `${bookName} ${chapter}:${verse}`;

    verseContainer.innerHTML = `<div class="verse-text">${verseText}</div>
    <div class="verse-ref">- ${reference} (Book: ${bookName}, Chapter: ${chapter}, Verse: ${verse})
    </div>`;
  } catch (error) {
    console.error("Error fetching random verse:", error);
    verseContainer.innerHTML = `<p style="color: red;">Error Failed to fetch the verse.</p>`;
  } finally {
    fetchButton.disabled = false;
  }
}

/*
code for changing backround below
*/
const backgroundImages = [
  'url("images/background1.jpg")',
  'url("images/background2.jpg")',
  'url("images/background3.jpg")',
  'url("images/background4.jpg")',
  'url("images/background5.jpg")',
];
let currentImageIndex = 0;

function changeBackground() {
  const body = document.body;

  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  body.style.backgroundImage = backgroundImages[randomIndex];
}

fetchButton.addEventListener("click", fetchVerse);

const changebgButton = document.getElementById("change-bg-button");

changebgButton.addEventListener("click", changeBackground);

(async () => {
  await fetchVerse();
})();
loadTasks();
updateDateTime();
changeBackground();
