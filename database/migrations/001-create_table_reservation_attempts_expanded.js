'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'ReservationAttempts',
      {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        price: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        main_image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        images: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: true,
        },
        promocode: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        booking_engine: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        search_query: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        deletedAt: {
          type: Sequelize.DATE,
          allowNull: true,
          default: null,
        },
      },
      {
        timestamp: true,
        paranoid: true,
        freezeTableName: true,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ReservationAttempts');
  },
};
