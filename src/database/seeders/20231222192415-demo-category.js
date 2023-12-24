'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Python',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  },
};
