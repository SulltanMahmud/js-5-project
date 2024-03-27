<<<<<<< HEAD
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("coutndown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set date input Min width Todays Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// populate countdown / complete UI

// populate countdown / complete UI

function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log("distance", distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    //   populate countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //   Hide Input container
    inputContainer.hidden = true;
    // Show countdown
    countdownEl.hidden = false;
  }, second);
}

// Take values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownValue);
  //   Get number version of curetnt date update Dom
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);
  updateDOM();
}

// Reset all values
function reset() {
  // hide couuntdown show input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the countdown
  clearInterval(countdownActive);
  // reset  valuees
  countdownTitle = "";
  countdownDate = "";
}
// Event Listener
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
=======
const inputContainer = document.getElementById("input-container");
const countdownForm = document.getElementById("countdownForm");
const dateEl = document.getElementById("date-picker");

const countdownEl = document.getElementById("countdown");
const countdownElTitle = document.getElementById("countdown-title");
const countdownBtn = document.getElementById("coutndown-button");
const timeElements = document.querySelectorAll("span");

let countdownTitle = "";
let countdownDate = "";
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set date input Min width Todays Date
const today = new Date().toISOString().split("T")[0];
dateEl.setAttribute("min", today);

// populate countdown / complete UI

// populate countdown / complete UI

function updateDOM() {
  countdownActive = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log("distance", distance);

    const days = Math.floor(distance / day);
    const hours = Math.floor((distance % day) / hour);
    const minutes = Math.floor((distance % hour) / minute);
    const seconds = Math.floor((distance % minute) / second);
    console.log(days, hours, minutes, seconds);

    //   populate countdown
    countdownElTitle.textContent = `${countdownTitle}`;
    timeElements[0].textContent = `${days}`;
    timeElements[1].textContent = `${hours}`;
    timeElements[2].textContent = `${minutes}`;
    timeElements[3].textContent = `${seconds}`;

    //   Hide Input container
    inputContainer.hidden = true;
    // Show countdown
    countdownEl.hidden = false;
  }, second);
}

// Take values from form input
function updateCountdown(e) {
  e.preventDefault();
  countdownTitle = e.srcElement[0].value;
  countdownDate = e.srcElement[1].value;
  console.log(countdownTitle, countdownValue);
  //   Get number version of curetnt date update Dom
  countdownValue = new Date(countdownDate).getTime();
  console.log("countdown value:", countdownValue);
  updateDOM();
}

// Reset all values
function reset() {
  // hide couuntdown show input
  countdownEl.hidden = true;
  inputContainer.hidden = false;
  // Stop the countdown
  clearInterval(countdownActive);
  // reset  valuees
  countdownTitle = "";
  countdownDate = "";
}
// Event Listener
countdownForm.addEventListener("submit", updateCountdown);
countdownBtn.addEventListener("click", reset);
>>>>>>> e53ea77 (initial commit)
