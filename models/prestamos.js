'use strict'
var mongoose = require('mongoose');
var FechasPago = require('./fechasPagos');
var Schema = mongoose.Schema;
var prestamoSchema = Schema({

    valor : Number,
    fechasPago : {type : Schema.Types.ObjectId, ref : 'fechasPago'},
    
});
module.exports = mongoose.model('Prestamo',prestamoSchema);
