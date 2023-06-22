const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dataBase = require('./database')

function dataBR(data) {
  let d = data.toString().split('-')
  return `${d[2]}/${d[1]}/${d[0]}`
}


app.use(express.static(__dirname), (req, res, next) => {
  next();
});


app.use(bodyParser.urlencoded({ extended: true }));

app.post('/cadastrodono', (req, res, next) => {
  const nome = `${(req.body.nome).toString().toUpperCase().replace(' ', '_')}`
  const dono = {
      Data_Nascimento: dataBR(req.body.nascimento),
      Dados: {
        Propriedades: {},
        Animais: {},
        Plantacoes: {}
      }
  }
  
  dataBase.newDono(dono, nome)
  res.redirect('/')
})

app.post('/cadastropropriedade', (req, res, next) => {
  const name = `${(req.body.nome).toString().toUpperCase().replace(' ', '_')}`
  const propriedade = {
      Nome: req.body.nome,
      Tamanho: req.body.tamanho + req.body.medida,

  }
  dataBase.newPropriedade(propriedade, req.body.dono, name)
  res.redirect('/')
})

app.post('/cadastroplantacao', (req, res, next) => {
  const name = `${(req.body.nome).toString().toUpperCase().replace(' ', '_')}`
  const propriedade = `${(req.body.propriedade).toString().toUpperCase().replace(' ', '_')}`
  
  const platacao = {
      Nome: req.body.nome,
      DataPlantio: dataBR(req.body.dataPlantio),
      Cultura: req.body.cultura,
      AreaPlantada: req.body.areaPlantada,
      Responsaveis: (req.body.donosPl).toString().split(', ')
  }
  dataBase.newPlatacao(platacao, req.body.donoDaTerra, name, propriedade)
 res.redirect('/')
})

app.post('/cadastroanimal', (req, res, next) => {
  const name = `${(req.body.nome).toString().toUpperCase().replace(' ', '_')}`
  const animal = {
      Nome: req.body.nome,
      Sexo: req.body.sexo,
      Nascimento: dataBR(req.body.nascimento),
      NomePai: req.body.nomePai,
      NomeMae: req.body.nomeMae
  }
  dataBase.newAnimal(animal, req.body.dono, name)
  res.redirect('/')
})

app.listen(2002, () => {
  console.log("Servidor rodando!")
});