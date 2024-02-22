const express = require('express');
const solicitudController = require('../controllers/SolicitudController');

const router = express.Router();

router.post('/', solicitudController.crearSolicitud);
router.get('/', solicitudController.obtenerSolicitudes);
router.get('/:id', solicitudController.obtenerSolicitudPorId);
router.put('/:id', solicitudController.actualizarSolicitud);

module.exports = router;