const browse = document.querySelector(".browse");
const browseBtns = document.querySelectorAll(".browse-btn");
const favorites = document.querySelector(".favorites");
const favoriteBtns = document.querySelectorAll(".favorite-btn");
const settings = document.querySelector(".settings");
const settingsBtns = document.querySelectorAll(".setting-btn");

//TODO: ANIMATE BUTTONS SLIDING DOWN ON HOVER
function menuHover(container, buttonArray) {
  container.addEventListener("mouseover", () => {
    buttonArray.forEach((element) => element.classList.remove("hidden"));
  });

  container.addEventListener("mouseleave", () => {
    buttonArray.forEach((element) => element.classList.add("hidden"));
  });
}

menuHover(browse, browseBtns);
menuHover(favorites, favoriteBtns);
menuHover(settings, settingsBtns);
