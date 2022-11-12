// Core Modules
const path = require('path');

// 3rd Party Modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Initialization
const app = express();
const PORT = process.env.PORT || 8080;
const MONGO_URI = process.env.MONGO_URI;

// Routers
const { shopRoutes, authRoutes } = require('./routes');

// Express Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(shopRoutes);
app.use('/auth', authRoutes);

mongoose
  .connect(MONGO_URI, () => {
    app.listen(PORT, () => {
      console.log(`Server running in port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
