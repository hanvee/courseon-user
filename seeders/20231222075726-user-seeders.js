'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: "Joko",
        profession: "Admin ",
        role: "admin",
        email: "joko@gmail.com",
        password: await bcrypt.hash('secret123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "Cate",
        profession: "Back End Developer",
        role: "student",
        email: "cate@mail.com",
        password: await bcrypt.hash('mysecret123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
