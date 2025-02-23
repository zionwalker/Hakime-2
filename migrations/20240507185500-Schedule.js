'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Doctors', // This should match the table name in your database
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      monday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tuesday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      wednesday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      thursday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      friday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      saturday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      sunday: {
        type: Sequelize.STRING,
        allowNull: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // This should match the table name in your database
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Schedules');
  }
};