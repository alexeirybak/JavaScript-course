const themeSwitch = document.getElementById("themeSwitch");
let userHasChosenTheme = false;
themeSwitch.addEventListener("change", toggleTheme);

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  // const newTheme = currentTheme === "dark" ? "light" : "dark";
  let newTheme;
  if (currentTheme === "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  userHasChosenTheme = true;

  setTheme(newTheme);
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  if (userHasChosenTheme) {
    localStorage.setItem("theme", theme);
  }
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const themeByBrowser = getThemeByBrowserSettings();
  if (themeByBrowser === "dark") {
    setTheme("dark");
  } else {
    const themeByTime = getThemeByTime();
    setTheme(themeByTime);
  }
}

function getThemeByTime() {
  const now = new Date();
  const hours = now.getHours();
  return hours >= 14 && hours < 22 ? "light" : "dark";
}

function getThemeByBrowserSettings() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  } else {
    return "light";
  }
}
