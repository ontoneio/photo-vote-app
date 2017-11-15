const express = require('express');
const logger = require('morgan');
const pgp = require('pg-promise');
const path = require('path');

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


app.listen(3000, () => {
  console.log(`Searching for sunshine on port 3000!!!`);
})