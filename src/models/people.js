'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class People extends Model {
    static associate(models) {
      People.hasMany(models.Course, {
        foreignKey: 'teacher_id'
      });
      People.hasMany(models.Register, {
        foreignKey: 'student_id'
      });
    }
  }

  People.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    CPF: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'People',
    tableName: 'peoples'

  });

  return People;
};
