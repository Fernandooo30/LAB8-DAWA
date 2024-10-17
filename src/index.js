const express = require('express');
const { create } = require('express-handlebars');
const categoriaRoutes = require('./routes/categoriaRoutes');
const libroRoutes = require('./routes/libroRoutes');
const sequelize = require('./config/database');

const app = express();
const PORT = 3000;

// Configuración de Handlebars con opciones de acceso
const hbs = create({
    extname: '.handlebars',
    helpers: { eq: (a, b) => a === b },
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
});

app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');
app.set('views', __dirname + '/views');

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: true }));

sequelize.sync()
    .then(() => console.log('Tablas sincronizadas correctamente'))
    .catch(error => console.error('Error al sincronizar tablas:', error));

app.get('/', (req, res) => {
    res.render('inicio');
});

app.use('/categorias', categoriaRoutes);
app.use('/libros', libroRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
