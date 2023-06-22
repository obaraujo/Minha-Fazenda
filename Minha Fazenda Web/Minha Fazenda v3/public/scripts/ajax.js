function ajax(url, callback) {
  $(document).ready(function () {
    $.ajax({
      url: `${url}`,
      error: function () {
        console.log("Falhou!");
      },
      success: function (data, xhr, textStatus) {
        console.log("Sucesso!");
      },
      complete: function (xhr, textStatus) {
        callback(xhr, url);
      },
    });
  });
}

function loadHTML(xhr, link) {
  const conteudo = document.getElementsByClassName("content")[0];
  const html = xhr.responseText;

  conteudo.innerHTML = html.substring(
    html.indexOf('class="content"') + 16,
    html.indexOf("</section>\n</body>")
  );

  window.history.pushState("object or string", "Title", `${link}`);
  const page = window.location.href.split("/").slice(-1).toString();
  const optionMenu = document.querySelector(`.${page}`);
  const optionsMenu = document.querySelectorAll(`.options-menu a`);
  optionsMenu.forEach((a) => remove_Class("active-option", a));
  addClass("active-option", optionMenu);
console.log(page);
  switch (page) {
    case "plantations":
      runScriptsLists()
      break;
    case "properties":
      runScriptsLists();
      break;
    case "animals":
      runScriptsLists();
      break;
    case "people":
      runScriptsLists();
      break;
    case "finance":
      break;
    case "calculator":
      break;
    case "equipments":
      break;

    default:
      break;
  }
}
