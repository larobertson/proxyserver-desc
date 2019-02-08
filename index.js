const express = require('express')
const app = express()

app.get('/', (req, res) => {
  //db.seed();
  res.send('I am just a proxy to the real services')
})
//this could be a proxy server, it needs to ge the request from my services server
//need to set that up, define an api, which will grab data from the database

app.listen(5000, () => console.log('Server running on port 5000'))