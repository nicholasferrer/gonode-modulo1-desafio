const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

// like a nodemon, everytime that changes a file, the server will restart
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
})

app.use(express.urlencoded({ extended: false })) // method post
app.set('view engine', 'njk')

app.get('/', (req, res) => {
  return res.render('age')
})

app.get('/major', (req, res) => {
  return res.render('major')
})

app.get('/minor', (req, res) => {
  return res.render('minor')
})

app.post('/check', (req, res) => {
  if (req.body.age >= 18) {
    return res.redirect('/major')
  } else {
    return res.redirect('/minor')
  }
})

app.listen(3000)
