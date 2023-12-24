'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    static associate(models) {
      Register.belongsTo(models.People, {
        foreignKey: 'student_id'
      });
      Register.belongsTo(models.Course, {
        foreignKey: 'course_id'
      });
    }
  }

  Register.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
    tableName: 'Registers',
    paranoid:true
  });

  return Register;
};
