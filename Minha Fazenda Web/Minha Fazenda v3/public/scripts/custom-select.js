function runScriptsCustomSelect() {
  const fieldsSelect = document.querySelectorAll(".field-select");

  fieldsSelect.forEach((field, index) => {
    field.addEventListener("click", () => {
      field.parentNode
        .querySelector(".options-container")
        .classList.add("active");
      const options = field.parentNode.querySelectorAll(".option");
      options.forEach((option, index) => {
        option.addEventListener("click", (e) => {
          field.innerHTML = option.querySelector("label").innerHTML;
          option.parentNode.classList.remove("active");
        });
      });
    });

    field.parentNode.addEventListener("mouseleave", () => {
      field.parentNode
        .querySelector(".options-container")
        .classList.remove("active");
    });
  });

}
