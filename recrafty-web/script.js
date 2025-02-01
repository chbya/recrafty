const themeToggle = document.getElementById("theme-toggle");
let isDarkMode = true;

themeToggle.addEventListener("click", () => {
  if (isDarkMode) {
    document.documentElement.style.setProperty("--background", "#ECEFF4");
    document.documentElement.style.setProperty("--text", "#2E3440");
    document.documentElement.style.setProperty("--primary", "#5E81AC");
    document.documentElement.style.setProperty("--secondary", "#81A1C1");
    document.documentElement.style.setProperty("--accent", "#A3BE8C");
    themeToggle.textContent = "Recrafty";
  } else {
    document.documentElement.style.setProperty("--background", "#2E3440");
    document.documentElement.style.setProperty("--text", "#D8DEE9");
    document.documentElement.style.setProperty("--primary", "#88C0D0");
    document.documentElement.style.setProperty("--secondary", "#5E81AC");
    document.documentElement.style.setProperty("--accent", "#A3BE8C");
    themeToggle.textContent = "Recrafty";
  }
  isDarkMode = !isDarkMode;
});