// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("dark-mode");
    document.getElementById("DarkModetext").textContent = "Dark Mode is ON";
  }
  

  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    document.getElementById("DarkModetext").textContent = "Dark Mode is OFF";
  }
  

  function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
      disableDarkMode();
    } else {
      enableDarkMode();
    }
  }