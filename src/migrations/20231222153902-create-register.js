'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
      status: {
        type: Sequelize.STRING
    },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'peoples', key: 'id' }
    },
    course_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Courses', key: 'id' }
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
    await queryInterface.dropTable('Registers');
  }
};