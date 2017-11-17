const express = require('express');
const logger = require('morgan');
const { add, subtract, total } = require('./db/db-utils')

const app = express();

// Set Options
app.set('view engine', 'ejs')

// Use Options
app.use(logger('dev'))
app.use(express.static("public"));

// Routes
app.get(`/`, (req, res) => {
  res.render('index.ejs')
})

app.get('/like-vote/:id', (req, res) => {
  const photoID = req.query.params.id
  add(photoID)
  .then(res.send('Add a like for photo # ${photoID}'))
  .catch(console.log())
})

app.get('/dislike-vote/:id', (req, res) => {
  const photoID = req.query.params.id
  subtract(photoID)
  .then(res.send('Subtract a like for photo # ${photoID}'))
  .catch(console.log())
})



app.listen(3000, () => {
  console.log(`Searching for sunshine on port 3000!!!`);
})