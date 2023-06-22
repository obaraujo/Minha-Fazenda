const fs = require('fs')

const arquivo = __dirname + '/files/database/dados.json'

function newDono(dono, nome) {
  fs.readFile(arquivo, 'utf-8', (erro, dado) => {
    const dados = JSON.parse(dado)
    dados[`${nome}`] = dono

    fs.writeFile(arquivo, JSON.stringify(dados, null, '\t'), err => {
      console.log(err || 'Dono salvo!');
    })
  })
}

function newPropriedade(propriedade, dono, nome) {
  fs.readFile(arquivo, 'utf-8', (erro, dado) => {
    const dados = JSON.parse(dado)
    dados[`${dono}`]['Dados']['Propriedades'][`${nome}`] = propriedade

    fs.writeFile(arquivo, JSON.stringify(dados, null, '\t'), err => {
      console.log(err || 'Propriedade salva!');
    })
  })
}


function newAnimal(animal, dono, nome) {
  fs.readFile(arquivo, 'utf-8', (erro, dado) => {
    const dados = JSON.parse(dado)
    dados[`${dono}`]['Dados']['Animais'][`${nome}`] = animal

    fs.writeFile(arquivo, JSON.stringify(dados, null, '\t'), err => {
      console.log(err || 'Animal salvo!')
    })
  })
}

function newPlatacao(plantacao, dono, nome) {
  fs.readFile(arquivo, 'utf-8', (erro, dado) => {
    const dados = JSON.parse(dado)
    dados[`${dono}`]['Dados']['Plantacoes'][`${nome}`] = plantacao

    fs.writeFile(arquivo, JSON.stringify(dados, null, '\t'), err => {
      console.log(err || 'Plantação salva!')
    })
  })
}

function getDados() {
  fs.readFile(arquivo, 'utf-8', (erro, dado) => {
    const dados = JSON.parse(dado)
    return dados
  })
}
module.exports = {newDono, newPropriedade, newAnimal, newPlatacao, getDados}