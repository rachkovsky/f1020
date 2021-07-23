const express = require('express');
const app = express()
const port = 3000;

app.use(express.static('dist/angular-f1020'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});


app.get('/todos', (req, res) => {
  // request to db
  res.send({
    'key': 2
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
