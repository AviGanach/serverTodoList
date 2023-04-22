const express = require("express");
const router = express.Router();
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
    return res.json(err).status(401);
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

router.post("/editTask", async (req, res) => {
  try {
    const result = await services.editTask_servis(req.body);
    console.log(result.body);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.post("/updateByCheckbox", async (req, res) => {
  try {
    console.log(req.body);
    const result = await services.updateByCheckbox_servis(req.body);
    console.log(result);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

module.exports = router;
