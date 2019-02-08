const mongoose = require('mongoose')
const seeder = require('./seeder.js').seeder
mongoose.connect('mongodb://localhost/descriptions');
let db = mongoose.connection;

const schema = new mongoose.Schema({ 
  title: 'String',
  text: 'String'
})

const Items = mongoose.model('Items', schema)

console.log('is the database connected?')


const seed = () => {
  seeder((datas) => {
    Items.insertMany(datas)
    .then(() => {
      console.log('successfully added data to the database!')
    })
    .catch(err => console.log('could not put data into postgres', err))
  })
}

module.exports = {
  seed
}