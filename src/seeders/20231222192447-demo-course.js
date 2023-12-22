'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Courses', [
      {
        title: "Python Web with Django",
        description: "Course on web applications using Django",
        date_init: "2023-01-01",
        category_id: 3,
        teacher_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('Courses', null, {});
  },
};
