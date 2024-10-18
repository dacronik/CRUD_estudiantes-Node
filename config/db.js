const { Sequelize} = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize  = new Sequelize(
    process.env.DB_NOMBRE,
    process.env.DB_USUARIO,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PUERTO || 5432,
    }
)

const conectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Postgres conectado...');
    } catch (error) {
        console.error("No se pudo conectar a la base de datos", error.message);
        process.exit(1);
    }
}

module.exports = { sequelize, conectDB };