// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu// menu

// video
function restartVideo() {
  var video = document.getElementById("minVideo");
  video.currentTime = 0; // Nulstil videoens tid til start
  video.play(); // Start videoen igen
}
