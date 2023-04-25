const client = require("../dbConfig");

const getAllList_DL = async (req, res) => {
  try {
    const todoList = await client.query("Select * from todolist order by id");
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
    console.log(result);
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
    return result;
  } catch (error) {
    return error;
  }
};

const editTask_DL = async (editTask) => {
  const query = {
    text: "UPDATE todolist SET taskdescription = $1, prioritylevel = $2 WHERE id = $3",
    values: [editTask.taskdescription, editTask.prioritylevel, editTask.id],
  };
  try {
    const response = await client.query(query);
    return response;
  } catch (error) {
    return error;
  }
};

const updateByCheckbox_DL = async (editCheckbox) => {
  const query = {
    text: "UPDATE todolist SET isdone = $1 WHERE id = $2",
    values: [editCheckbox.isdone, editCheckbox.id1],
  };
  try {
    const response = await client.query(query);
    return response;
  } catch (err) {
    return res.json(err);
  }
};

const orderBy_DL = async (ascDesc) => {
  const query = {
    text: "SELECT * FROM todolist ORDER BY case when prioritylevel = 'low' then 1 when prioritylevel = 'medium' then 2 when prioritylevel = 'high' then 3 end " + ascDesc
  };
  try {
    const response = await client.query(query);
    return response;
  } catch (err) {
    return err
  }
};

const filterBy_DL = async (level) => {
  const query = {
    text: "SELECT * FROM todolist where prioritylevel = '" + level + "'",
  };
  try {
    const response = await client.query(query);
    return response.rows;
  } catch (err) {
    return err;
  }
};


module.exports = { getAllList_DL, deleteTask_DL, addTask_DL, editTask_DL, updateByCheckbox_DL, orderBy_DL, filterBy_DL };
