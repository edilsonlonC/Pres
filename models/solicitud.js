'use strict'
var Solicitante = require('./Solicitante');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolicitudSchema = Schema({
    valor : {
        type: Number,
        min: 0,
        required : true
    },
    fecha : {
        type: Date,
        default : Date.now()
    },
    isActive : {
        type : Boolean,
        default : false
    },
    solicitante :{type : Schema.Types.ObjectId,ref:'Solicitante'} 

});
module.exports=mongoose.model('Solicitud',SolicitudSchema);