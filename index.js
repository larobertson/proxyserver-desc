const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World! We\'re running Reops!');
})
app.listen(3000, () => console.log('Server running on port 5000'))