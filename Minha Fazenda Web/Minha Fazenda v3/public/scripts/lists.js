// function createItemLists(obj) {
//   for ((key, value) in obj) {
//   }
// }

function runScriptsLists() {
  const btsMoreOptions = document.querySelectorAll(".bt-more-options");
  console.log("runottom")
  btsMoreOptions.forEach((bt, index) => {
    bt.addEventListener("click", () => {
      const optionsList = bt.parentNode.querySelector(".options-list-item");
      const stateContainer = optionsList.style.display;
      if (stateContainer != "flex") {
        optionsList.style.display = "flex";

        const openOptionAdd = optionsList.querySelector(".open-add-options");
        const optionAdd = optionsList.querySelector(".options-add-item");

        console.log(optionAdd);
        optionsList.addEventListener("mouseleave", () => {
          optionAdd.classList.remove("open");
          optionsList.querySelector(".arrow").classList.remove("arrow-menu");
          optionsList.style.display = "none";
        });

        openOptionAdd.addEventListener("click", () => {
          if (optionAdd.classList.toString().split(" ").indexOf("open") > -1) {
            optionAdd.classList.remove("open");
            openOptionAdd
              .querySelector(".arrow")
              .classList.remove("arrow-menu");
          } else {
            optionAdd.classList.add("open");
            openOptionAdd.querySelector(".arrow").classList.add("arrow-menu");
          }
        });
      } else {
        optionsList.style.display = "none";
      }
    });
  });

  openWindow()
}
