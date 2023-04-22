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
  editTask_servis: async (editTask) => {
    console.log(editTask);
    try {
      if (!editTask.taskdescription || !editTask.prioritylevel) {
        throw new Error("inputs Are required !");
      }
      const result = await DL.editTask_DL(editTask);
      if (result.rowCount === 0) {
        throw new Error("Id Not Exist !");
      }
      return result;
    } catch (error) {
      // console.log(error);
      return error;
    }
  },
  updateByCheckbox_servis: async (editCheckbox) => {
    try {
      console.log(editCheckbox);
      const result = await DL.updateByCheckbox_DL(editCheckbox);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }, 
}

module.exports = { services };
