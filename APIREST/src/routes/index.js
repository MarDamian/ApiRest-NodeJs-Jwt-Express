const { Router } = require('express');
const router = Router();

const { verificarToken,obtenerEstudiantes, obtenerEstudiantePorId, crearEstudiante, actualizarEstudiante, eliminarEstudiante , obtenerEstudiantesAprobados,obtenerEstudiantesReprobados} = require('../controllers/index.controller');

router.post('/estudiante',  crearEstudiante);

router.get('/estudiantes', verificarToken, obtenerEstudiantes);
router.get('/estudiante/:id', verificarToken, obtenerEstudiantePorId);
router.put('/estudiante/:id', verificarToken, actualizarEstudiante);
router.delete('/estudiante/:id',verificarToken, eliminarEstudiante);
router.get('/estudiantesaprobados',verificarToken, obtenerEstudiantesAprobados);
router.get('/estudiantesreprobados',verificarToken, obtenerEstudiantesReprobados);


module.exports = router;


