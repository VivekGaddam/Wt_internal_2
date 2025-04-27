
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, Welcome to the Express Server!');
});

app.get('/greet', (req, res) => {
  const name = req.query.name || 'Guest';
  res.send(`Hello, ${name}!`);
});

app.post('/data', (req, res) => {
  const { username, age } = req.body;
  res.json({
    message: 'Data received successfully!',
    data: { username, age },
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
