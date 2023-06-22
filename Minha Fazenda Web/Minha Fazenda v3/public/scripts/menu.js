document.querySelector(".open-menu").addEventListener("click", () => {
  const menu = document.querySelector(".min-menu");
  document.querySelector(".open-menu").style.display = "none";
  menu.classList.toggle("side-menu");
  menu.classList.remove("min-menu");
  // document.querySelector(".content").style.left = "280px";
  // document.querySelector(".content").style.width = "calc(100% - 280px)";
  // document.querySelector(".title-logo").style.left = "280px";
});

document.querySelector(".close-menu").addEventListener("click", () => {
  const menu = document.querySelector(".side-menu");
  document.querySelector(".open-menu").style.display = "block";
  menu.classList.toggle("min-menu");
  menu.classList.remove("side-menu");
//   document.querySelector(".content").style.left = "6rem";
//   document.querySelector(".content").style.width = "calc(100% - 6rem)";
//   document.querySelector(".title-logo").style.left = "5rem";
});

window.onload = () => {
  const url = window.location.href.split("/").slice(-1);
  const optionMenu = document.querySelector(`.${url}`);
  const optionsMenu = document.querySelectorAll(`.options-menu a`);
  optionsMenu.forEach((a) => remove_Class("active-option", a));
  addClass("active-option", optionMenu);
};

document.querySelectorAll(".menu a").forEach((link, i) => {
  link.onclick = function (e) {
    e.preventDefault();
    ajax(link.href, loadHTML);
  };
});

