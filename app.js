const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { conectDB, sequelize } = require('./config/db');
const estudiantesRutas = require('./routes/estudiantesRutas');


dotenv.config();
const app = express();
conectDB();


const PUERTO = process.env.PUERTO || 3000;

sequelize.sync().then(() => {
    console.log('Modelos sincronizados con la base de datos')
});

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sirviendo archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));


// Configurar Pug como motor de vistas
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', { titulo: 'Bienvenido a la Tienda' });
});

app.use('/estudiantes', estudiantesRutas);

app.listen(PUERTO, () => {
    console.log(`Servidor ejecutandose en http://localhost:${PUERTO}`);
});

