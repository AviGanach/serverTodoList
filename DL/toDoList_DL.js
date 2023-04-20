const client = require("../dbConfig");

const getAllList_DL = async (req, res) => {
  try {
    const todoList = await client.query("Select * from todolist");
    // console.log(todoList.rows);
    return todoList.rows;
  } catch (err) {
    return res.json(err);
  }
};

const deleteTask_DL = async (id) => {
  const query = {
    text: "DELETE FROM todolist WHERE id =" + id,
  };
  try {
    const result = await client.query(query);
    return result;
  } catch (error) {
    return error;
  }
};

const addTask_DL = async (obj) => {
  const query = {
    text:
      "INSERT INTO todolist (taskdescription, prioritylevel) VALUES ('" +
      obj.taskdescription +
      "','" +
      obj.prioritylevel +
      "')",
  };
  
  try {
    const result = await client.query(query);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

const editTask_DL = (id) => {
  const query = {
    text:
      "UPDATE todolist SET taskdescription = " +
      req.query.taskdescription +
      ",prioritylevel =" +
      req.query.prioritylevel +
      " where id = " +
      req.query.id,
  };
  client.query(query);
};

module.exports = { getAllList_DL, deleteTask_DL, addTask_DL, editTask_DL };
