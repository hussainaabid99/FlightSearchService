'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Flights', [
      {
        airline: 'American Airlines',
        flight_number: 'AA101',
        dep_airport_id: 1,  // JFK
        dest_airport_id: 2,  // LAX
        departure: new Date('2024-09-22T10:00:00'),
        arrival: new Date('2024-09-22T14:00:00'),
        dep_terminal: 4,
        dest_terminal: 2,
        logo_path: '/logos/aa.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Delta Airlines',
        flight_number: 'DL202',
        dep_airport_id: 3,  // HND
        dest_airport_id: 4,  // LHR
        departure: new Date('2024-09-23T08:00:00'),
        arrival: new Date('2024-09-23T12:00:00'),
        dep_terminal: 1,
        dest_terminal: 3,
        logo_path: '/logos/delta.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'United Airlines',
        flight_number: 'UA303',
        dep_airport_id: 1,  // JFK
        dest_airport_id: 3,  // HND
        departure: new Date('2024-09-23T09:30:00'),
        arrival: new Date('2024-09-23T17:00:00'),
        dep_terminal: 2,
        dest_terminal: 1,
        logo_path: '/logos/united.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'British Airways',
        flight_number: 'BA404',
        dep_airport_id: 4,  // LHR
        dest_airport_id: 2,  // LAX
        departure: new Date('2024-09-24T11:00:00'),
        arrival: new Date('2024-09-24T19:00:00'),
        dep_terminal: 5,
        dest_terminal: 4,
        logo_path: '/logos/ba.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Air France',
        flight_number: 'AF505',
        dep_airport_id: 4,  // LHR
        dest_airport_id: 1,  // JFK
        departure: new Date('2024-09-24T13:00:00'),
        arrival: new Date('2024-09-24T17:00:00'),
        dep_terminal: 2,
        dest_terminal: 3,
        logo_path: '/logos/airfrance.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Lufthansa',
        flight_number: 'LH606',
        dep_airport_id: 2,  // LAX
        dest_airport_id: 3,  // HND
        departure: new Date('2024-09-25T07:30:00'),
        arrival: new Date('2024-09-25T15:00:00'),
        dep_terminal: 1,
        dest_terminal: 2,
        logo_path: '/logos/lufthansa.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Emirates',
        flight_number: 'EK707',
        dep_airport_id: 1,  // JFK
        dest_airport_id: 2,  // LAX
        departure: new Date('2024-09-25T18:00:00'),
        arrival: new Date('2024-09-25T22:00:00'),
        dep_terminal: 4,
        dest_terminal: 2,
        logo_path: '/logos/emirates.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Qatar Airways',
        flight_number: 'QR808',
        dep_airport_id: 3,  // HND
        dest_airport_id: 4,  // LHR
        departure: new Date('2024-09-26T12:00:00'),
        arrival: new Date('2024-09-26T16:00:00'),
        dep_terminal: 2,
        dest_terminal: 5,
        logo_path: '/logos/qatar.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Singapore Airlines',
        flight_number: 'SQ909',
        dep_airport_id: 2,  // LAX
        dest_airport_id: 4,  // LHR
        departure: new Date('2024-09-26T15:00:00'),
        arrival: new Date('2024-09-26T23:00:00'),
        dep_terminal: 3,
        dest_terminal: 1,
        logo_path: '/logos/singapore.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        airline: 'Cathay Pacific',
        flight_number: 'CX1001',
        dep_airport_id: 1,  // JFK
        dest_airport_id: 3,  // HND
        departure: new Date('2024-09-27T09:00:00'),
        arrival: new Date('2024-09-27T17:00:00'),
        dep_terminal: 4,
        dest_terminal: 2,
        logo_path: '/logos/cathay.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
