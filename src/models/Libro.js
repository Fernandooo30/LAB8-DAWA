const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Libro = sequelize.define('Libro', {
    id_libro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Portada: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ISBN: {
        type: DataTypes.STRING,
        allowNull: true
    },
    Cantidad_disponible: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_categoria: {
        type: DataTypes.INTEGER,
        references: {
            model: Categoria,
            key: 'id_categoria'
        },
        allowNull: false
    }
}, {
    timestamps: false  // Desactiva los campos createdAt y updatedAt
});

Libro.belongsTo(Categoria, { foreignKey: 'id_categoria' });

module.exports = Libro;
