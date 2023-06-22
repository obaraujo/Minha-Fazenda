// Funcão para retorna os nomes dos obj
function nomeOBJ(obj) {
  if (!(Object.keys(obj).length == 0)) {
    const OBJ = Object.keys(obj) 
    let tags = []
    OBJ.forEach(chave => {
      tags.push(`<a linkDados href=${(4).toString()}>${obj[chave].Nome}</a>`)
    })

    return tags.join(', ')
  } else {
    return '<span style="color:red;">Não possue</span>'
  }
}

// Desabilita campos que o usuário não sabe
const camposNaoSei = document.querySelectorAll('[naosei]')
camposNaoSei.forEach((campo, indice) => {
  let checkboxNaoSei = document.querySelectorAll('[naoseiclick]')[indice]
  checkboxNaoSei.addEventListener('change', function () {
    if (checkboxNaoSei.checked) {
      campo.setAttribute('disabled', 'disabled')
      campo.value = ''
    } else {
      campo.removeAttribute('disabled')
    }
  })
})

// Quando o cadastro for cancelado apagar os valores nos campos
const botoesCancelar = document.querySelectorAll('[cancelar]')
const popups = document.querySelectorAll('[popup]')
const botoesReset = document.querySelectorAll('[reset]')
const inputs = document.querySelectorAll('[entrada]')
botoesCancelar.forEach((botao, indice) => {
  botao.addEventListener('click', function () {
    const confirmacaoCancelamento = confirm('ESTE cadastro será apagado!')
    if (confirmacaoCancelamento) {
      popups[indice].style.display = 'none'
      document.querySelectorAll('[opcoesP]').forEach(campo => { campo.remove() })
      document.querySelector('[propriedade]').innerHTML += '<option opcoesP value="">Escolha um dono</option>'
      botoesReset[indice].click()
    }
  })
})

// Abrir as popups
const botaoAbrir = document.querySelectorAll('[mostra]')
botaoAbrir.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    popups[indice].style.display = 'block'
  })
})

// Fechar as popups
const botaoFechar = document.querySelectorAll('[fecha]')
botaoFechar.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    popups[indice].style.display = 'none'
  })
})

// Pega todos os donos cadastrados
let urlAtual = window.location.href.split('')
urlAtual.pop()
urlAtual = urlAtual.join('');
const url = urlAtual + '/files/database/dados.json'
const xhttp = new XMLHttpRequest()
let dados = {}
xhttp.open('GET', url, true)

xhttp.onreadystatechange = () => {
  if (xhttp.readyState == 4 && xhttp.status == 200) {
    dados = JSON.parse(xhttp.responseText)
    const donos = Object.keys(dados)
    const campoDonos = document.querySelectorAll('[dono]')
    donos.forEach(dono => {
      campoDonos.forEach(campo => {
        campo.innerHTML += `<option value="${dono}">${dono}</option>`
      })
    })


    // carrega as propriedades de cada dono
    const campoPropriedades = document.querySelector('[propriedade]')
    campoDonos[2].addEventListener('change', () => {
      const dono = campoDonos[2].options[campoDonos[2].selectedIndex].value
      const propriedades = Object.keys(dados[dono].Dados.Propriedades)
      const campos = document.querySelectorAll('[opcoesP]')
      campos.forEach(campo => {
        campo.remove()
      })

      propriedades.length == 0 ? campoPropriedades.innerHTML = `<option>Não possui</option>` : campoPropriedades.innerHTML = ``
      propriedades.forEach(propriedade => {
        const nomePropriedade = dados[dono].Dados.Propriedades[propriedade].Nome
        campoPropriedades.innerHTML += `<option opcoesP value="${nomePropriedade}">${nomePropriedade}</option>`
      })
    })

    // carrega todos os dados para serem exibidos no formato de tabela
    const nomes = Object.keys(dados)
    const corpoDaTabela = document.querySelector('[corpoDaTabela]')
    nomes.forEach((nome, indice) => {
      corpoDaTabela.innerHTML += `
      <tr ${indice % 2 == 0 ? 'tc' : 'nc'}>
        <td>${nome}</td>
        <td>${nomeOBJ(dados[nome].Dados.Propriedades)}</td>
        <td>${nomeOBJ(dados[nome].Dados.Animais)}</td>
        <td>${nomeOBJ(dados[nome].Dados.Plantacoes)}</td>
      </tr>`
    })
  }
}
xhttp.send()
