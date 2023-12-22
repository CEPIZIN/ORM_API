'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Registers', [
      {
        status: 'Enrolled',
        student_id: 1,  
        course_id: 1,   
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        status: 'Completed',
        student_id: 2,  
        course_id: 2,   
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Registers', null, {});
  },
};
