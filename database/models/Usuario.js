const db = require('../db');

const Usuario = {
  insertUsuario: async (nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado) => {
    try {
      console.log('Insertando usuario en Usuario.js:', nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado);
      const query = `
        INSERT INTO Usuarios (nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado) 
        VALUES (?, ?, ?, ?, ?)
      `;
      const [rows, fields] = await db.query(query, [nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado]);
      console.log('Usuario insertado en Usuario.js:', rows);
      return rows;
    } catch (error) {
      console.error("Error al insertar usuario en Usuario.js:", error.message);
      throw error;
    }
  },

  getAllUsuarios: async () => {
    try {
      const query = `
        SELECT * FROM Usuarios
      `;
      const [rows, fields] = await db.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  },

  getUsuarioById: async (id_usuario) => {
    try {
      const query = `
        SELECT * FROM Usuarios WHERE id_usuario = ?
      `;
      const [rows, fields] = await db.query(query, [id_usuario]);
      return rows[0];
    } catch (error) {
      throw error;
    }
  },

  updateUsuario: async (id_usuario, nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado) => {
    try {
      console.log('Actualizando usuario en Usuario.js:', id_usuario, nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado);
      const query = `
        UPDATE Usuarios 
        SET nombre_usuario = ?, correo_electronico = ?, contraseña = ?, tipo_usuario = ?, estado = ? 
        WHERE id_usuario = ?
      `;
      const [rows, fields] = await db.query(query, [nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado, id_usuario]);
      console.log('Usuario actualizado en Usuario.js:', rows);
      return rows;
    } catch (error) {
      console.error("Error al actualizar usuario en Usuario.js:", error.message);
      throw error;
    }
  },

  deleteUsuario: async (id_usuario) => {
    try {
      const query = `
        DELETE FROM Usuarios WHERE id_usuario = ?
      `;
      const [rows, fields] = await db.query(query, [id_usuario]);
      return rows;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Usuario;
