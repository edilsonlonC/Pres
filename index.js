'use strict'
const DB = "Prestamos";
var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;


mongoose.Promise =  global.Promise;
mongoose.connect('mongodb://localhost:27017/' + DB)
.then(()=>{
    console.log("connectios is succes");
    app.listen(port, ()=>{
        console.log(`server is running in http://localhost:${port}`);
        
    });
    
});

