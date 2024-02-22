const connection = require('../db');

const Servicio = {
  insertServicios: async () => {
    try {
      const query = `
        INSERT INTO Servicios (id_programmer, titulo, descripcion, precio) 
        VALUES
          (1, 'Diseño de sitio web', 'Diseño profesional de sitios web responsivos', 500.00),
          (3, 'Desarrollo de aplicación móvil', 'Desarrollo de aplicaciones móviles para iOS y Android', 1000.00);
      `;
      const [rows, fields] = await connection.query(query);
      console.log('Servicios insertados:', rows);
    } catch (error) {
      console.error('Error al insertar servicios:', error);
    }
  }
};

module.exports = Servicio;
