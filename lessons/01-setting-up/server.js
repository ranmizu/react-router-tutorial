const express = require('express');
const app = express();
const path = require('path');
const compression = require('compression');

var PORT = process.env.PORT || 8080;

app.use(express.static(__dirname, 'public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Production Express server running at localhost:', PORT);
})
