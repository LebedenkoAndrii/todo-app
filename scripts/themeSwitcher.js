const themeBtn = document.getElementById("theme-btn");
const htmlElement = document.documentElement;

themeBtn.addEventListener("click", function () {
  let currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "light-theme") {
    htmlElement.setAttribute("data-theme", "dark-theme");
  } else {
    htmlElement.setAttribute("data-theme", "light-theme");
  }
});
