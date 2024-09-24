'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airline: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      flight_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      dest_airport_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      dep_airport_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Airports',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      departure: {
        type: Sequelize.DATE,
        allowNull: false
      },
      arrival: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dep_terminal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      dest_terminal: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      logo_path: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flights');
  }
};