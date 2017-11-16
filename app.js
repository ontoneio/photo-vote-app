const express = require('express');
const logger = require('morgan');
const path = require('path');
const db = require('./db/db-util')

const app = express();

// Set Options
app.set('view engine', 'ejs')

// Use Options
app.use(logger('dev'))
app.use(express.static("public"));
// Routes
app.get(`/`, (req, res, next) => {
  res.render('index.ejs')
  next();
})

app.post('/vote', (req, res) => {
  // Receive Fetch Call
  // Update DB
  //Send Vote count
} )


app.listen(3000, () => {
  console.log(`Searching for sunshine on port 3000!!!`);
})