const express = require('express');
const mongoose = require('mongoose');
const { mongoURI } = require('./config');
const authRoutes = require('./routes/authRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
