const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout.js');

app.use(express.static(__dirname + '/public'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send(layout());
});

console.log('hello');

app.listen(3000);
