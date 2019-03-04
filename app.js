var express = require('express');
var bodyParser = require('body-parser');
var app= express();

//cargando rutas 
var projectRoutes = require('./routes/routesPrestamos');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// rutas 
app.use('',projectRoutes);
module.exports=app;