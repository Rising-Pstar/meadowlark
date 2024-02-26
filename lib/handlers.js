const fortune = require('./fortune')
const about = (req, res) => {
  res.render('about', { randomFortune: fortune.getFortune() })
}

const home = (req, res) => res.render('home')

const notFound = (req, res) => {
  res.status(404)
  res.render('404')
}

const serverError = (err, req, res, next) => {
  res.status(500)
  res.render('500')
}

module.exports = {
  home,
  about,
  notFound,
  serverError
}