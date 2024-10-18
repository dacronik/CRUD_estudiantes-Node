const express = require('express');
const router = express.Router();
const estudianteControlador = require('../controllers/estudianteControllers');


//Creando las rutas
router.get('/', estudianteControlador.obtenerEstudiante);
router.get('/:id', estudianteControlador.obtenerEstudiantePorRut);
router.post('/', estudianteControlador.agregarEstudiante);
router.post('/:id/actualizar', estudianteControlador.actualizarEstudiante);
router.post('/:id/eliminar', estudianteControlador.eliminarEstudiante);
router.get('/:id/editar', estudianteControlador.mostrarFormularioEditarEstudiante);

module.exports = router;

