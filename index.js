const express = require('express');
//const jwt= require("jsonwebtoken");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./APIREST/src/routes/index'));

app.listen(3000);
console.log('Sevidor en el puerto:', 3000);