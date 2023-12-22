'use strict';
const {
  Model
} = require('sequelize');
const course = require('./course');
const { FOREIGNKEYS } = require('sequelize/types/query-types');
module.exports = (sequelize, DataTypes) => {
  class People extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      People.hasMany(models.Course, 
        {foreignKey: 'teacher_id'
      })
      People.hasMany(models.Register, 
        {foreignKey: 'student_id'
      })
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