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

      this.hasMany(models.Flight, {
        foreignKey: 'dep_airport_id',
        as: 'departures'
      })

      this.hasMany(models.Flight, {
        foreignKey: 'dest_airport_id',
        as: 'arrivals'
      })
    }

  }
  Airport.init({
    airport_name: {
      type: DataTypes.STRING,
      allowNull: false
    },

    airport_code: {
      type: DataTypes.STRING,
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