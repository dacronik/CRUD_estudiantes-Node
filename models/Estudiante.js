const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Estudiante = sequelize.define('Estudiante',{
    nombre: DataTypes.STRING,
    rut: DataTypes.STRING,
    curso: DataTypes.STRING,
    nivel: DataTypes.INTEGER
})

module.exports = Estudiante;