const express = require('express');
const servicioController = require('../controllers/ServicioController'); // Asegúrate de que esté correctamente requerido

const router = express.Router();

// Rutas para servicios
router.post('/registrar', servicioController.registrarServicio);
router.get('/', servicioController.obtenerServicios);
router.get('/:id', servicioController.obtenerServicioPorId);
router.put('/:id', servicioController.actualizarServicio);
router.delete('/:id', servicioController.eliminarServicio);

module.exports = router;
