'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsTo(models.Category,{
        foreignKey:'category_id'
      })
      Course.belongsTo(models.People,{
        foreignKey:'teacher_id'
      })
      Course.belongsTo(models.Register,{
        foreignKey:'course_id'
      })
      
      
    }
  }
  Course.init({
    title: DataTypes.STRING,
    descriptio: DataTypes.STRING,
    date_init: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'Courses'
  });
  return Course;
};