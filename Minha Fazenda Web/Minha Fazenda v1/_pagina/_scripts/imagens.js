
const area = document.querySelector("div.foto");
//const area2 = document.querySelector("div.coluna");
const indetificador = document.querySelector.bind(document);

const botao = indetificador(".botaodearquivos");
const input = indetificador("#file");

botao.onclick = () => input.click();
let index = 0;


input.onchange = carregar => {

    const arquivo = carregar.target.files.item(index);
    const ler = new FileReader();

    ler.onload = carregar =>
        area.insertAdjacentHTML("afterend", `
        <div class="foto">
            <div class="numerodaimg">${index}</div>
            <img src="${carregar.target.result}" id="id${index}" style="width:100%">
        </div>`);
  /*      area2.innerHTML += `
        <div class="coluna">
            <img class="demo cursor" src="${carregar.target.result}" style="width:100%" onclick="currentSlide(${index})" alt="The Woods">
        </div>`*/
    ler.readAsDataURL(arquivo);
        

        index += 1;
        console.log(index)
}



var slideIndex = 1;
showSlides(slideIndex);

function passarimagem(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("foto");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("img2");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    //captionText.innerHTML = dots[slideIndex - 1].alt;
}