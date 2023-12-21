'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('peoples', [
      {
        "name": "Solange Student",
        "email": "solange@email.com",
        "cpf": "63058133022",
        "active": true,
        "role": "student",
        "createdAt": "2023-12-21T12:34:56.789Z",
        "updatedAt": "2023-12-21T12:34:56.789Z"
      },
      {
        "name": "Igor Student",
        "email": "igor@email.com",
        "cpf": "99018205028",
        "active": true,
        "role": "student",
        "createdAt": "2023-12-21T12:34:56.789Z",
        "updatedAt": "2023-12-21T12:34:56.789Z"
      },
      {
        "name": "Aline Student",
        "email": "aline@email.com",
        "cpf": "92797497066",
        "active": true,
        "role": "student",
        "createdAt": "2023-12-21T12:34:56.789Z",
        "updatedAt": "2023-12-21T12:34:56.789Z"
      },
      {
        "name": "Fernando Student",
        "email": "fernando@email.com",
        "cpf": "17195730000",
        "active": true,
        "role": "student",
        "createdAt": "2023-12-21T12:34:56.789Z",
        "updatedAt": "2023-12-21T12:34:56.789Z"
      },
      {
        "name": "Ricardo Faculty",
        "email": "ricardo@email.com",
        "cpf": "06946507061",
        "active": true,
        "role": "faculty",
        "createdAt": "2023-12-21T12:34:56.789Z",
        "updatedAt": "2023-12-21T12:34:56.789Z"
      },
      {
        "name": "Dine Faculty",
        "email": "dine@email.com",
        "cpf": "80941142078",
        "active": true,
        "role": "faculty",
        "createdAt": "2023-12-21T12:34:56.789Z",
        "updatedAt": "2023-12-21T12:34:56.789Z"
      }
    ]
    , {});
    
  },

  async down (queryInterface, Sequelize) {
 
      await queryInterface.bulkDelete('peoples', null, {});
     
  }
};
