const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/tasks.js');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('/api/tasks', taskRoutes);

mongoose
  .connect('mongodb://localhost:27017/merncrud', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
