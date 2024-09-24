'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City, {
        foreignKey: 'city_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Airport.init({
    airport_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    airport_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },

    address: {
      type: DataTypes.STRING,
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};