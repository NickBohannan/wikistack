const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const layout = require('./views/layout.js');
const models = require('./models/index');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

app.use(express.static(__dirname + '/public'));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/wiki', wikiRouter);
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.redirect('/wiki');
});

const init = async () => {
  await models.Page.sync();
  await models.User.sync();

  app.listen(3000);
};

init();