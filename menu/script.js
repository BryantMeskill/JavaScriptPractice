const browse = document.querySelector(".browse");
browse.addEventListener("mouseover", () => {
  const browseBtns = document.querySelectorAll(".one");
  console.log("here");
  browseBtns.forEach((element) => element.classList.remove("hidden"));
});
