const Estudiante = require('../models/Estudiante');


const obtenerTodosLosEstuadiantes = async() => {
    return await Estudiante.findAll();
};

const obtenerEstudiantePorRut = async(rut) => {
    return await Estudiante.findByPk(rut);
};

const agregarEstudiante = async(estudiante) => {
    return await Estudiante.create(estudiante);
};

const actualizarEstudiante = async(id,datos) => {
    const estudiante = await Estudiante.findByPk(id);
    if (estudiante) {
        return await estudiante.update(datos);
    };
    return null;
}

const eliminarEstudiante = async(id) => {
    const estudiante = await Estudiante.findByPk(id);
    if (estudiante) {
        return await estudiante.destroy();
    }
    return null;
};

module.exports = {
    obtenerTodosLosEstuadiantes,
    obtenerEstudiantePorRut,
    agregarEstudiante,
    actualizarEstudiante,
    eliminarEstudiante,
}