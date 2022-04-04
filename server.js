const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const { query } = require('express');
const express = require('express');
const res = require('express/lib/response');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');


app.listen(PORT, () => {
  console.log(`API server is now on port ${PORT}!`);
});