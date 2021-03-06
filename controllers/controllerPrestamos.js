'use strict'
var Solicitante = require('../models/Solicitante');
var Solicitud = require('../models/solicitud');
var Prestamo = require ('../models/prestamos');
var FechasPagos = require('../models/fechasPagos');

var controller = {
    home:  (req,res) =>{
        return res.status(200).send({message  : 'Home'});
    },
    saveSolicitante : (req,res) =>{
        var solicitante = new Solicitante(req.body);
        solicitante.save((err , solictanreStorage) => {
            if (err) {
                if (err.errmsg) return res.status(500).send({message : 'El usuario existe'});
                else return res.status(500).send({message:'inserte un id correcto'})
            }
            
            if (!solictanreStorage) return res.status(404).send({message:'error al guardar solicitante'})
            return res.status(200).send({solictanreStorage});
        });

    
      
    },
    getSolictante : (req,res) => {
        var solicitanteId = req.params.id;
        if (solicitanteId == null) return res.status(404).send({message: 'El Solicitante no existe '});
        Solicitante.findById(solicitanteId,(err,solicitante)=>{
            if (err) return res.status(500).send({message : 'err'});
            if (!solicitante) res.status(404).send({message : 'El solicitante no existe '});
             else return res.status(200).send({solicitante});
        });

    },
    saveSolicitud : (req,res) => {
        var solicitanteId = req.params.id;
        var solicitud = new Solicitud();
        Solicitante.findById(solicitanteId,(err,solicitante) => {
            if (err) return res.status(500).send({message: 'error al guardar la solicitud'});
            if (!solicitante) return res.status(404).send({message: 'Solicitante inexistente'});
            else {
        solicitud.valor=req.body.valor;
        solicitud.solicitante =solicitante;
        solicitud.save((err,solicitudSaved) => {
            if (err) return res.status(500).send({message : err});
            if (!solicitudSaved) return res.status(404).send({message : 'error al conectar con la pagina '});
            else return res.status(200).send({solicitudSaved});
        });

            }
        });
        
    },

    getSolicitud : (req,res) => {
        var solicitudId = req.params.id;
        Solicitud.findById(solicitudId , (err,solicitud) => {
            if (err) return res.status(500).send({message : err});
            if (!solicitud) return res.status(404).send({message : 'la solicitud no existe'});
            else return res.status(200).send({solicitud});
        });
    },

    getSolicitudes : (req,res) => {
        Solicitud.find({}, (err,solicitudes) => {
            if (err) return res.status(500).send({message : err});
            if (!solicitudes)  return res.status(404).send({message : 'no hay solicitudes'});
            else return res.status(200).send({solicitudes});
        });
        
    },
    getSolicitantes : (req,res) => {
        Solicitante.find({},(err,solicitantes) => {
            if (err) return res.status(500).send({message:err});
            if (!solicitantes) return res.status(404).send({message : 'no hay solicitantes'});
            else return res.status(200).send({solicitantes});
        });
    },
    activateSolicitud : (req,res) => {
        var solicitudId = req.params.id;
        Solicitud.findByIdAndUpdate(solicitudId,{isActive : true},(err,solicitudUpdate) => {
            if (err) return res.status(500).send({message : err});
            if (!solicitudUpdate) return res.status(404).send({message : 'no existe ña solicitud'});
            else return res.status(200).send({solicitudUpdate});
        });
    },
    // pruebas fechas 
    createDate : (req,res) => {
        var fechapago = new FechasPagos();
        fechapago.Pago1 = new Date(Date.now());
        fechapago.Pago2 = new Date(Date.now()+30*24*60*60*1000);
        fechapago.Pago3 = new Date(Date.now()+60*24*60*60*1000);
        fechapago.Pago4 = new Date(Date.now()+90*24*60*60*1000);
        fechapago.Pago5 = new Date(Date.now()+120*24*60*60*1000);
        fechapago.Pago6 = new Date(Date.now()+150*24*60*60*1000); 
        fechapago.save((err,fechapagoStorage) => {
            if (err) return res.status(500).send({message : err});
            if (!fechapagoStorage) return res.status(404).send({message : 'not found'});
            else return res.status(200).send({fechapago});
        });
       
        
    

    },
}
module.exports = controller;