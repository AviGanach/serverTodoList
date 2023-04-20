const express = require("express");
const router = express.Router();
const client = require("../dbConfig");
const { services } = require("../services/toDoList_servis");

router.get("/getAll", async (req, res) => {
  try {
    const todoList = await services.getAllList_servis();
    return res.json(todoList);
  } catch (err) {
    return res.json(err);
  }
});

router.delete("/deleteTask", async (req, res) => {
  try {
    const todoList = await services.deleteTask_servis(req.query.id);
    return res.json(todoList);
  } catch (err) {
    return res.json(err);
  }
});

router.post("/addTask", async (req, res) => {
  try {
    const result = await services.addTask_servis(req.body);
    return res.send(result.command);
  } catch (error) {
    return res.json(error);
  }
});

router.post('/editDescriptionTask', async (req, res) => {
   const query = {
      text:  "UPDATE todolist SET taskdescription = " + req.query.taskdescription + " where id = " + req.query.id
   };
   try {
      await client.query(query);
      return res.send("All Good !")
   } catch (error) {
      return res.json(error)
   }
});

// router.post('/editPriorityLevelTask', async (req, res) => {
//    const query = {
//       text:  "UPDATE todolist SET taskdescription = " + req.query.prioritylevel + " where id = " + req.query.id
//    };
//    try {
//       await client.query(query);
//       return res.send("All Good !")
//    } catch (error) {
//       return res.json(error)
//    }
// });

module.exports = router;
