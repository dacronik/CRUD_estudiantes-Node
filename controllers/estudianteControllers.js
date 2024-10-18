const estudianteService = require('../services/estudianteService');
const Estudiante = require('../models/Estudiante');

const obtenerEstudiante = async (req, res) => {
    const estudiantes = await estudianteService.obtenerTodosLosEstuadiantes();
    res.render('estudiantes/index', {estudiantes});
};

const obtenerEstudiantePorRut = async (req,res) =>{
    const estudiante = await estudianteService.obtenerEstudiantePorRut(req.params.rut);
    res.render('estudiantes/detalle', {estudiante});
};

const agregarEstudiante = async (req, res) => {
    const { nombre, rut, curso,nivel } = req.body;
    await estudianteService.agregarEstudiante({nombre, rut, curso, nivel});
    res.redirect('/estudiantes');
};

const actualizarEstudiante = async (req, res) => {
    await estudianteService.actualizarEstudiante(req.params.id, req.body);
    res.redirect('/estudiantes');
};

const eliminarEstudiante = async (req, res) => {
    await estudianteService.eliminarEstudiante(req.params.id);
    res.redirect('/estudiantes');
};

const mostrarFormularioEditarEstudiante = async (req, res) => {
    const estudiante = await Estudiante.findByPk(req.params.id);
    if(!estudiante){
        return res.status(404).send('Estudiante no encontrado');
    }
    res.render('estdiantes/editarEstudiante', {estudiante})
};

module.exports = {
    obtenerEstudiante,
    obtenerEstudiantePorRut,
    agregarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante,
    mostrarFormularioEditarEstudiante
}