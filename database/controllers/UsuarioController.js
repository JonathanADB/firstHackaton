const Usuario = require('../models/Usuario');

const registrarUsuario = async (req, res) => {
  const { nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado } = req.body;

  try {
    console.log('Registrando usuario en UsuarioController.js:', req.body);
    await Usuario.insertUsuario(nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado);
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error("Error al registrar usuario en UsuarioController.js:", error.message);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.getAllUsuarios();
    res.json(usuarios);
  } catch (error) {
    console.error("Error al obtener usuarios en UsuarioController.js:", error.message);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};

const obtenerUsuarioPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Usuario.getUsuarioById(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    console.error("Error al obtener usuario por ID en UsuarioController.js:", error.message);
    res.status(500).json({ error: 'Error al obtener usuario por ID' });
  }
};

const actualizarUsuario = async (req, res) => {
  const { id } = req.params;
  const { nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado } = req.body;

  try {
    console.log('Datos recibidos para actualizar en UsuarioController.js:', id, nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado);
    await Usuario.updateUsuario(id, nombre_usuario, correo_electronico, contraseña, tipo_usuario, estado);
    res.json({ message: 'Usuario actualizado exitosamente' });
  } catch (error) {
    console.error("Error al actualizar usuario en UsuarioController.js:", error.message);
    res.status(500).json({ error: 'Error al actualizar usuario' });
  }
};

const eliminarUsuario = async (req, res) => {
  const { id } = req.params;

  try {
    await Usuario.deleteUsuario(id);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    console.error("Error al eliminar usuario en UsuarioController.js:", error.message);
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};

module.exports = {
  registrarUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario,
};
