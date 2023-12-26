'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('peoples','deletAt' ,{
      allowNull:true,
      type:Sequelize.DATE                       
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('peoples','deletAt');
  }
};