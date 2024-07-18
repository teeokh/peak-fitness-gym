//
//    The Dark Mode System
//

/* Body and Toggle */
var body = document.querySelector("body");
const darkModeToggle = document.querySelector("#dark-mode-toggle");

// Get Status of Dark Mode
let darkMode = localStorage.getItem("darkMode");

// Enable Dark Mode
const enableDarkMode = () => {
  body.classList.add("dark-mode");
  localStorage.setItem("darkMode", "enabled");
  document.querySelector(".cs-sun").style.opacity = 0;
  document.querySelector(".cs-moon").style.opacity = 1;
}

// Disable Dark mode
const disableDarkMode = () => {
  body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", null);
  document.querySelector(".cs-sun").style.opacity = 1;
  document.querySelector(".cs-moon").style.opacity = 0;
}

// Check the state of dark mode in local storage
if (darkMode == "enabled") {
  enableDarkMode();
} else {
  disableDarkMode()
}

// add event listener to the dark mode button toggle
darkModeToggle.addEventListener('click', () => {
  // on click, check localstorage for the dark mode value
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    // if dark mode is not enabled, run this function to set it to enabled
    enableDarkMode();
  } else {
    // if dark mode is enabled, run this function to set it to disabled
    disableDarkMode();
  }
})