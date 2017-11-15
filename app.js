const express = require('express');
const logger = require('morgan')
const pgp = require('pg-promise') 
const app = express();


app.set('view engine', 'ejs')

app.get(`/`, (req, res) => {
  res.render('index.ejs')
})


app.listen(3000, () => {
  console.log(`Searching for sunshine on port 3000!!!`);
})