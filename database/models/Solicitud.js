// Solicitud.js (modelo)
const connection = require('../db');

const Solicitud = {
  getAll: async () => {
    try {
      const query = 'SELECT * FROM Solicitudes_Servicio';
      const [rows, fields] = await connection.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  insertSolicitudes: async () => {
    try {
      const query = `
        INSERT INTO Solicitudes_Servicio (id_client, id_programmer, estado) 
        VALUES
          (2, 1, 'pendiente'),
          (2, 3, 'pendiente');
      `;
      const [rows, fields] = await connection.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Solicitud;
