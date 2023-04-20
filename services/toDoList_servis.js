const DL = require("../DL/toDoList_DL");

const services = {
  getAllList_servis: async () => {
    try {
      const result = await DL.getAllList_DL();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTask_servis: async (id) => {
    try {
      const result = await DL.deleteTask_DL(id);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  addTask_servis: async (task) => {
    if (!task.taskdescription || !task.prioritylevel) {
      return "inputs Are required !";
    }
    try {
      const result = await DL.addTask_DL(task);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

module.exports = { services };
// module.exports = { getAllList_servis, deleteTask_servis, addTask_servis, editTask_servis }
