'use strict';

const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(3030, () => {
  console.log('Serving on 3030');
});
