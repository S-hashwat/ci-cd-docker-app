const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('Hello from Node.js CI/CD pipeline!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
