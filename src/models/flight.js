'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airport, {
        foreignKey: 'dep_airport_id',
        as: 'departureAirport',
      })

      this.belongsTo(models.Airport, {
        foreignKey: 'dest_airport_id',
        as: 'destinationAirport',
      })
    }
  }
  Flight.init({
    airline: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flight_number: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    dest_airport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    dep_airport_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    departure: {
      type: DataTypes.DATE,
      allowNull: false
    },
    arrival: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dep_terminal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    dest_terminal: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    logo_path: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};