'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses', [
      {
        title: 'Introduction to JavaScript',
        description: 'Learn the basics of JavaScript programming.',
        date_init: '2023-01-01',
        teacher_id: 1,  
        category_id: 1, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Python for Beginners',
        description: 'A beginner-friendly Python programming course.',
        date_init: '2023-02-01',
        teacher_id: 2,  
        category_id: 2, 
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
