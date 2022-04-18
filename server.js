const express = require('express');
const app = express();
const port = process.envPORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Wyatt Chadwick!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})