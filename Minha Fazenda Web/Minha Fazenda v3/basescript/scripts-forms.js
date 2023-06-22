document.querySelectorAll('a').forEach((link, i) => {
    link.onclick = function (e) {
        e.preventDefault()

        const conteudo = document.getElementsByClassName('conteudo')[0]
        fetch(link.href)
            .then(resp => resp.text())
            .then(html => conteudo.innerHTML = html)
        const myInterval = setInterval(script, 200);
        function script() {

            const lista = document.querySelector('.lista')
            if (!!lista) {
                clearInterval(myInterval)
                scripts()
            }
        }
    }
})


function pegarImgs() {
    console.log(this.pegarImgs.name)
    const dadosImgs = {}
    const areaImgs = document.querySelector('.img')
    const inputFiles = document.querySelectorAll('.upload-files')
    console.log(inputFiles)
    inputFiles.forEach((inputFile, i) => {
        console.log(inputFile.onchange)
        // inputFile.onchange = e => {
        // console.log(e || 'oi')
        const styleDisplay = i == 0 ? 'block' : 'none'
        const file = inputFile.files
        if (file.length > 0) {
            const reade = new FileReader();
            let numFiles = 0
            const inputsInfo = inputFile.parentNode.querySelectorAll('input[type="text"]')
            dadosImgs.titulo = inputsInfo[0].getAttribute('info')
            dadosImgs.srcsImg = []
            const info = inputFile.parentNode.parentNode.querySelector('h3').innerText
            const infos = inputFile.parentNode.querySelectorAll('.dadoIMG')
            let info2 = ''
            infos.forEach((info) => {
                info2 += `
                <span>&nbsp; &nbsp; &nbsp; &nbsp; <i>${info.getAttribute('info')}</i>: <b>${info.value.toUpperCase()} </b>
                </span> \n`
            })
            reade.onload = e => {
                const html = `
                    \n <div style="display: none;" img> <img src="${e.target.result}">
                    <div class='dadosIMG'>
                    <span>Imagem adicionada em: <b>${info}</b></span>
                    <span>Informações passadas: </span>
                    ${info2}
                    <span>Nome do arquivo: <b>${inputFile.files[0].name}</b></span>
                    </div>
                     <div> \n`

                areaImgs.insertAdjacentHTML('beforeend', html)
            }
            reade.readAsDataURL(file[numFiles])
            numFiles++;

            for (let i = 1; i < file.length; i++) {

                const reade = new FileReader();
                reade.onload = e => {
                    console.log('foi')
                    const html = `
                    \n <div style="display: none;" img> <img src="${e.target.result}">
                    <div class='dadosIMG'>
                    <span>Imagem adicionada em: <b>${info}</b></span>
                    <span>Informações passadas: </span>
                    ${info2}
                    <span>Nome do arquivo: <b>${inputFile.files[0].name}</b></span>
                    </div>
                     <div> \n`

                    areaImgs.insertAdjacentHTML('beforeend', html)
                }
                reade.readAsDataURL(file[numFiles])
                numFiles++;
            }
        }
        // }

    })
    const imagens = document.querySelectorAll('[img]')
    return imagens
}

function scripts() {
    const lista = document.querySelector('.lista')
    const cadastro = document.querySelector('.cadastro')
    lista.querySelector('[add]').addEventListener('click', () => {
        lista.style.display = 'none'
        cadastro.style.display = 'block'
    })

    document.querySelector('button[type="reset"]').addEventListener('click', () => {
        lista.style.display = 'block'
        cadastro.style.display = 'none'
    })
    document.querySelectorAll('.upload-fotos').forEach((bt, i) => {
        bt.addEventListener('click', () => {
            document.querySelectorAll('.upload-files')[i].click()
        })
    })

    document.querySelectorAll('.adicionar').forEach((bt, i) => {
        bt.addEventListener('click', () => {

            const html = `
            <section class="dados">${bt.parentElement.parentElement.querySelector('.dados').innerHTML}
            <button class="remover" type="button"><i class='fas fa-times'></i></button>
            </section>`
            bt.parentElement.parentElement.insertAdjacentHTML('beforeend', html)
            const rms = document.querySelectorAll('.remover')
            rms.forEach(rm => {
                rm.onclick = () => {
                    rm.parentNode.remove()
                }
            })
            document.querySelectorAll('.upload-fotos').forEach((bt2, i) => {
                bt2.addEventListener('click', () => {
                    document.querySelectorAll('.upload-files')[i].click()
                })
            })
        })
    })


    document.querySelector('#ver-fotos').addEventListener('click', () => {

        pegarImgs()
        let acomulador = 0
        const myInterval = setInterval(script, 200);
        function script() {
            const imagens = document.querySelector('[img]')
            console.log('SetIterval', imagens)
            ++acomulador
            if (!!imagens) {
                clearInterval(myInterval)
                mostraImgs()
            } else if (acomulador > 3) {
                 alert('Não existe imagens')
                clearInterval(myInterval)
            }
        }
    })
}


function mostraImgs() {
    const imagens = document.querySelectorAll('[img]')
        document.querySelector('.funcoes > .fa-times').addEventListener('click', () => {
            document.querySelector('.ver-imagens').style.display = 'none'
            const elemento = document.querySelector('.img');
            while (elemento.firstChild) {
                elemento.removeChild(elemento.firstChild);
            }
        })

        document.querySelector('.ver-imagens').style.display = 'block'


        console.log(imagens)
        const btsControle = document.querySelectorAll('.btC')
        let indexImgVisivel = 0


        for (let i = 0; i < imagens.length; i++) {
            console.log('rre');
            imagens[i].style.display = i == 0 ? 'block' : 'none'
        }

        const [previous, next] = btsControle

        next.onclick = () => {
            console.log(indexImgVisivel)
            if (imagens.length > 0) {
                if (indexImgVisivel + 1 < imagens.length) {
                    indexImgVisivel += 1
                    imagens[indexImgVisivel].style.display = 'block'
                    imagens[indexImgVisivel - 1].style.display = 'none'
                } else if (imagens.length == 1) {
                    indexImgVisivel = 0
                    imagens[indexImgVisivel].style.display = 'block'
                } else {
                    indexImgVisivel = 0
                    imagens[indexImgVisivel].style.display = 'block'
                    imagens[imagens.length - 1].style.display = 'none'
                }
            }
        }
        previous.onclick = () => {
            console.log(indexImgVisivel)
            if (imagens.length > 0) {
                if (indexImgVisivel - 1 >= 0) {
                    indexImgVisivel -= 1
                    imagens[indexImgVisivel].style.display = 'block'
                    imagens[indexImgVisivel + 1].style.display = 'none'
                } else if (imagens.length == 1) {
                    indexImgVisivel = imagens.length - 1
                    imagens[indexImgVisivel].style.display = 'block'
                } else {
                    indexImgVisivel = imagens.length - 1
                    imagens[indexImgVisivel].style.display = 'block'
                    imagens[0].style.display = 'none'
                }
            }
        }
    
}


function mascara_data(campo, valor) {
    var mydata = '';
    mydata = mydata + valor;
    if (mydata.length == 2) {
        mydata = mydata + '/';
        campo.value = mydata;
    }
    if (parseInt(campo.value.substring(3, 5)) > 12 || parseInt(campo.value.substring(3, 5)) < 0) {
        alert('Data inválida!')
        mydata = delete campo.value.substring(3, 5)
    }

    if (mydata.length == 5) {
        mydata = mydata + '/';
        campo.value = mydata;
    }
}