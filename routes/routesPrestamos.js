var express = require('express');
var PrestamosController = require('../controllers/controllerPrestamos');
var router = express.Router();

// routes 
router.get('/home',PrestamosController.home);
router.post('/solicitante',PrestamosController.saveSolicitante);
router.get('/solicitante/:id',PrestamosController.getSolictante);
router.post('/solicitud/:id',PrestamosController.saveSolicitud);
router.get('/solicitud/:id',PrestamosController.getSolicitud);
router.get('/solicitudes',PrestamosController.getSolicitudes);
router.get('/solicitantes' ,PrestamosController.getSolicitantes);
module.exports = router;