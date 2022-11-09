// Core Modules
const path = require('path');

// 3rd Party Modules
const express = require('express');

// Initialization
const PORT = process.env.PORT || 8080;
const app = express();

// Routers
const { shopRoutes } = require('./routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use(shopRoutes);

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
