'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Register.belongsTo(models.people,{
        foreignKey:'student_id'
      })
      Register.belongsTo(models.Course ,{
        foreignKey:'course_id'
      })

    }
  }
  Register.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
    tableName: 'Registers'
  });
  return Register;
};