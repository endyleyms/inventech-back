const { DataTypes } = require('sequelize');
const conexion = require('../../config/db');

const Traza_mantenimientos = conexion.define('Traza_mantenimientos', {

    id_traza: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    fecha:{ type: DataTypes.DATE, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    id_estado: { type: DataTypes.INTEGER, allowNull: false },
    serial: { type: DataTypes.STRING, allowNull: false },
    id_mantenimiento:{ type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'traza_mantenimientos',
        timestamps: false,
});

module.exports = Traza_mantenimientos;