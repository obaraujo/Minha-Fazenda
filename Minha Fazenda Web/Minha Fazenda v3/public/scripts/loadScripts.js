function verificarURL(arrayURL) {
  let value = false;
  for (let i = 0; i < arrayURL.length; i++) {
    let url = arrayURL[i]
    if (window.location.href.split("/").indexOf(url) >= 0) {
      value = true;
      break;
    }
  }
  return value;
}

function loadScripts() {
  const scripts = document.querySelectorAll(".js");
  if (scripts.length < 1) {
    const array = ["plantations", "animals", "equipments", "properties"];
    console.log("pop");
    const html = document.querySelector("html");
    const tagsScript =
      '<script type="text/javascript" class="js" src="/scripts/windows.js"></script><script type="text/javascript" class="js" src="/scripts/custom-select.js"></script><script type="text/javascript" class="js" src="/scripts/forms.js"></script>';

    if (verificarURL(array)) {
      console.log("colocol o htm");
      html.insertAdjacentHTML("beforeend", tagsScript);
    }
  } else {
    console.log('apagou')
    scripts.forEach(script => script.remove())
    loadScripts()
  }
}

window.addEventListener("load", () => {
  loadScripts();
});

/* These are the modifications: */
history.pushState = ( f => function pushState(){
  var ret = f.apply(this, arguments);
  window.dispatchEvent(new Event('pushstate'));
  window.dispatchEvent(new Event('locationchange'));
  return ret;
})(history.pushState);

history.replaceState = ( f => function replaceState(){
  var ret = f.apply(this, arguments);
  window.dispatchEvent(new Event('replacestate'));
  window.dispatchEvent(new Event('locationchange'));
  return ret;
})(history.replaceState);

window.addEventListener('popstate',()=>{
  window.dispatchEvent(new Event('locationchange'))
});

window.addEventListener("locationchange", () => {
  loadScripts();
});
