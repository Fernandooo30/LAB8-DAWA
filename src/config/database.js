const { Sequelize } = require('sequelize');

// Configuración de la conexión directamente en el archivo
const sequelize = new Sequelize(
    'Bibliotech',   
    'root',  
    '', 
    {
        host: 'localhost',     // Host de la base de datos
        dialect: 'mysql',      // Dialecto de la base de datos (mysql en este caso)
        logging: false,        // Desactiva los logs de SQL en consola
    }
);

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos exitosa.');
    })
    .catch(error => {
        console.error('Error al conectar a la base de datos:', error);
    });

module.exports = sequelize;
