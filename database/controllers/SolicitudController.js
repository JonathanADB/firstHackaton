const Solicitud = require('../models/Solicitud');

const obtenerSolicitudPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const solicitud = await Solicitud.getSolicitudById(id);
    if (!solicitud) {
      return res.status(404).json({ error: 'Solicitud no encontrada' });
    }
    res.json(solicitud);
  } catch (error) {
    console.error("Error al obtener solicitud por ID:", error.message);
    res.status(500).json({ error: 'Error al obtener solicitud por ID' });
  }
};

const actualizarSolicitud = async (req, res) => {
  const { id } = req.params;
  const { id_client, id_programmer, estado } = req.body;

  try {
    await Solicitud.updateSolicitud(id, id_client, id_programmer, estado);
    res.json({ message: 'Solicitud actualizada exitosamente' });
  } catch (error) {
    console.error("Error al actualizar solicitud:", error.message);
    res.status(500).json({ error: 'Error al actualizar solicitud' });
  }
};

module.exports = {
  obtenerSolicitudPorId,
  actualizarSolicitud,
};
