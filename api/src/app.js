const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

// passport
const passport = require('passport');                   
const session = require("express-session");             
require('./utils/local-passport-setup')

require('./db.js');

const app = express();

const cors = require('cors');


app.use(
  cors({
    origin: "http://localhost:3000",             //se habilitan las credenciales de cors para los pedidos que vengan del front
    credentials: true,
  })
)

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));


app.use(
  session({
    secret: "secretcode",
    resave: false,
    path: "/",
    proxy: true,
    saveUninitialized: true,
  })
);

//se inicializa passport y passport session para el manejo de la session con passport
app.use(passport.initialize());                    
app.use(passport.session());

app.use('/', routes);

// Error catching endware.
app.use((err, req, res, next) => { 
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;
