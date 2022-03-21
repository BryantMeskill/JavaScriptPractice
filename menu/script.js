const browse = document.querySelector(".browse");
const browseBtns = document.querySelectorAll(".browse-btn");

browse.addEventListener("mouseover", () => {
  browseBtns.forEach((element) => element.classList.remove("hidden"));
});

browse.addEventListener("mouseleave", () => {
  browseBtns.forEach((element) => element.classList.add("hidden"));
});
