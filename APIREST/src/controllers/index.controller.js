const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const claveSecreta = 'miClaveSecreta';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: '1111', 
  database: 'Nodejs',
  port: '5432'
});

const obtenerEstudiantes = async (req, res) => {
  const response = await pool.query('SELECT id, nombre, calificacion FROM estudiantes ORDER BY id ASC');
  res.status(200).json(response.rows);
};

const obtenerEstudiantePorId = async (req, res) => {
  const id = parseInt(req.params.id);
  const response = await pool.query('SELECT id, nombre, calificacion FROM estudiantes WHERE id = $1', [id]);
  res.json(response.rows);
};

const crearEstudiante = async (req, res) => {
  const { nombre, calificacion, contrasena } = req.body;
  const response = await pool.query('INSERT INTO estudiantes (nombre, calificacion, contrasena) VALUES ($1, $2, $3) RETURNING id, nombre', [nombre, calificacion, contrasena]);
  const nuevoEstudiante = response.rows[0];
  const token = generarToken(nuevoEstudiante.id, nuevoEstudiante.nombre);
  res.json({
    message: 'Estudiante Creado',
    body: {
      estudiante: { nombre, calificacion },
      token
    }
  });
};

const actualizarEstudiante = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, calificacion, contrasena } = req.body;
  const response =await pool.query('UPDATE estudiantes SET nombre = $1, calificacion = $2, contrasena = $3 WHERE id = $4',
   [nombre,calificacion,contrasena,id]);
  res.json('Estudiante Actualizado');

};

const eliminarEstudiante = async (req, res) => {
  const id = parseInt(req.params.id);
  await pool.query('DELETE FROM estudiantes where id = $1', [
    id
  ]);
  res.json(`Estudiante ${id} Eliminado`);
};

const obtenerEstudiantesAprobados = async (req, res) => {
  const response = await pool.query('SELECT id, nombre, calificacion FROM estudiantes WHERE calificacion >= 3.0 ORDER BY id ASC');
  res.status(200).json(response.rows);
};
const obtenerEstudiantesReprobados = async (req, res) => {
  const response = await pool.query('SELECT id, nombre, calificacion FROM estudiantes WHERE calificacion < 3.0 ORDER BY id ASC');
  res.status(200).json(response.rows);
};

const generarToken = (id, nombre,contrasena) => {
  const payload = { id, nombre,contrasena };
  const token = jwt.sign(payload, claveSecreta, { expiresIn: '1h' });
  return token;
};

const verificarToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }
  jwt.verify(token, claveSecreta, (error, decoded) => {
    if (error) {
      return res.status(401).json({ message: 'Token inválido' });
    }
    req.usuario = decoded;
    next();
  });
};

module.exports = {
  verificarToken,
  obtenerEstudiantes,
  obtenerEstudiantePorId,
  crearEstudiante,
  actualizarEstudiante,
  eliminarEstudiante,
  obtenerEstudiantesAprobados,
  obtenerEstudiantesReprobados
};


