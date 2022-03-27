const hamburger = document.querySelector(".icon");
const navLink = document.querySelector(".topnav");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});