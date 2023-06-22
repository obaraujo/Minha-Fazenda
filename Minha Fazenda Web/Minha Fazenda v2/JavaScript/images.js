/**
 * Faz o preview da imagem
 */

function upload(idfiles, idArea, classTmp, classFiles) {
  const elementFiles = document.querySelector(idfiles);
  elementFiles.click();

  const area = document.querySelector(idArea);
  let nFiles = 0;
  elementFiles.onchange = e => {

    const file = e.target.files;
    const reade = new FileReader();

    if (document.querySelector(classTmp) !== null) {
      document.querySelector(classTmp).style.display = 'none';
    }

    let imgs = document.getElementsByClassName(classFiles);
    for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
    }



    reade.onload = e => { area.insertAdjacentHTML("afterend", `<img class="${classFiles}" style="display: none; cursor: pointer;" src="${e.target.result}" onclick="abrirImg('${e.target.result}')"/>`) }
    reade.readAsDataURL(file[nFiles])
    nFiles++;

    while (elementFiles.files.length > nFiles) {
      const file = e.target.files;
      const reade = new FileReader();
      reade.onload = e => { area.insertAdjacentHTML("afterend", `<img class="${classFiles}" style="display: none; cursor: pointer;" src="${e.target.result}" onclick="abrirImg('${e.target.result}')"/>`) }
      reade.readAsDataURL(file[nFiles])
      nFiles++;
    }

    

  }
}

/**
 * Resposável pelo controle das imagens
 */

var slideIndex = 1;

function passar(n, className) {
  showSlides(slideIndex += n, className);
}


function showSlides(n, className) {
  var i;
  var slides = document.getElementsByClassName(className);

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slides[slideIndex - 1] !== undefined) {
    slides[slideIndex - 1].style.display = "block";
  }
}

