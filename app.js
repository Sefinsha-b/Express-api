// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

// Set up Express app
const app = express();
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://arun:dfUfDYp7j2xuaUqt@cluster1.sulequc.mongodb.net/?retryWrites=true&w=majority';
// mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Atlas connected'))
  .catch(err => console.log(err));

// Configure routes
app.use('/users', userRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
