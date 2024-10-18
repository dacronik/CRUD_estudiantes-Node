const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Estudiante = sequelize.define('Estudiante',{
    nombre: {
        type:DataTypes.STRING
    },
    rut: {
        type:DataTypes.STRING
    },
    curso: {
        type:DataTypes.STRING
    },
    nivel: {
        type:DataTypes.INTEGER
    }
})

module.exports = Estudiante;