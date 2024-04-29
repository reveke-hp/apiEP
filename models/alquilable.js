'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alquilable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alquilable.init({
    descripcion: DataTypes.STRING,
    disponible: DataTypes.BOOLEAN,
    precio: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Alquilable',
  });
  return Alquilable;
};