const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Categoria = sequelize.define('Categoria', {
    id_categoria: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Nombre_categoria: { type: DataTypes.STRING(45), allowNull: false },
    Descripcion: { type: DataTypes.STRING(45), allowNull: true },
}, {
    timestamps: false
});

module.exports = Categoria;
