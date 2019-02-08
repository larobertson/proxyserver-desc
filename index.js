const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const db = require('./database/db.js')
const seeder = require('./database/seeder.js').seeder;

app.get('/', (req, res) => {
  //db.seed();
  res.send('database has data')
})

app.listen(5000, () => console.log('Server running on port 5000'))