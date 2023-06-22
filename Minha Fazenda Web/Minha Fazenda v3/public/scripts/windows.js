function openWindow() {
  const btAdd = document.querySelector(".bt-add");
  const tag_A = btAdd.parentNode;
  console.log(tag_A);
  tag_A.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("09");
    ajax(tag_A.href, (xhr, link) => {
      const html = xhr.responseText;
      document.querySelector("body").insertAdjacentHTML("afterbegin", html);
      runScriptsForm();

      const cancel = document.querySelector(".bt-cancel");

      cancel.addEventListener("click", () => {
        const contentAlert = document.querySelector(".content-alert");
        contentAlert.style.opacity = 1;
        contentAlert.style.zIndex = 13;

        document.querySelector(".cancel").addEventListener("click", () => {
          contentAlert.style.opacity = 0;
          contentAlert.style.zIndex = 0;

        });
        const confirm = document.querySelector(".confirm");
        confirm.addEventListener("click", () => {
          document.querySelector(".window").remove();
        });
      });
    });
  });
}
