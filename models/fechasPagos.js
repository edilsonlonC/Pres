var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var FechasPagosSchema = Schema({
    Pago1 : {
        type: Date,
        default : null
    },
    Pago2 : {
        type: Date,
        default:  null
    },
    Pago3 : {
        type: Date,
        default : null
    },
    Pago4 : {
        type: Date,
        default: null
    },
    Pago5: {
        type: Date,
        default : null
    },
    Pago6 : {
        type: Date,
        default : null
    },
    
})

module.exports = mongoose.model(FechasPagosSchema,'fechasPago');