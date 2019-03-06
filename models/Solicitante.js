'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SolicitanteSchema = Schema({
    _id : {
        type: Number,
        min: 0
    },
    name : String,
    lastname1 : String,
    lastname2  : {
        type : String,
        default : null
    },
    email : {
        type: String,
        required : true,
        
    }

    
});
module.exports = mongoose.model('Solicitante',SolicitanteSchema);
