module.exports = {
  index(req, res) { 
    return res.render('layout/main')
  },
  home(req, res) {
    return res.render('home')
  },
  plantations(req, res) {
    return res.render('plantations')
  },
  properties(req, res) {
    return res.render('properties')
  },
  people(req, res) {
    return res.render('people')
  },
  animals(req, res) {
    return res.render('animals')
  },
  calculator(req, res) {
    return res.render('calculator')
  },
  finance(req, res) {
    return res.render('finance')
  },
  equipments(req, res) {
    return res.render('equipments')
  }

}