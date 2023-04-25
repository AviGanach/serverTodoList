const DL = require("../DL/toDoList_DL");

const services = {
  getAllList_service: async () => {
    try {
      const result = await DL.getAllList_DL();
      return result;
    } catch (error) {
      console.log(error);
    }
  },
  deleteTask_service: async (id) => {
    try {
      const result = await DL.deleteTask_DL(id);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  addTask_service: async (task) => {
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
  editTask_service: async (editTask) => {
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
      console.log(error);
      return error;
    }
  },
  updateByCheckbox_service: async (editCheckbox) => {
    try {
      const result = await DL.updateByCheckbox_DL(editCheckbox);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
  orderBy_service: async (ascDesc) => {
    try {
      const result = await DL.orderBy_DL(ascDesc);
      const orderList = result.rows.filter((item) => item.isdone !== true);
      return orderList;
    } catch (error) {
      console.log(error);
      return error;
    }
  }, 

  filterBy_service: async (level) => {
    try {
      const result = await DL.filterBy_DL(level);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }, 
}

module.exports = { services };
