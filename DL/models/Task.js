const { DataTypes } = require('sequelize');
const sequelize = require('../../sequelize'); // Adjust the path to your sequelize.js file

const Task = sequelize.define('tasks', {
  // id: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  taskdescription: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prioritylevel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isdone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

Task.sync()
module.exports = Task;
