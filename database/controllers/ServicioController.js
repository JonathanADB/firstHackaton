const Servicio = require('../models/Servicio');

const obtenerServicios = async (req, res) => {
  try {
    const servicios = await Servicio.getAllServicios();
    res.json(servicios);
  } catch (error) {
    console.error("Error al obtener servicios:", error.message);
    res.status(500).json({ error: 'Error al obtener servicios' });
  }
};

module.exports = {
  obtenerServicios,
};
