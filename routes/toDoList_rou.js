const express = require("express");
const router = express.Router();
const { services } = require("../services/toDoList_service");

router.get("/getAll", async (req, res) => {
  try {
    const todoList = await services.getAllList_service();
    return res.json(todoList);
  } catch (err) {
    return res.json(err);
  }
});

router.delete("/deleteTask", async (req, res) => {
  try {
    const todoList = await services.deleteTask_service(req.query.id);
    return res.json(todoList);
  } catch (err) {
    return res.json(err).status(401);
  }
});

router.post("/addTask", async (req, res) => {
  try {
    console.log(req.body);
    const result = await services.addTask_service(req.body);
    return res.send(result.command);
  } catch (error) {
    return res.json(error);
  }
});

router.post("/editTask", async (req, res) => {
  try {
    const result = await services.editTask_service(req.body);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.post("/updateByCheckbox", async (req, res) => {
  try {
    const result = await services.updateByCheckbox_service(req.body);
    return res.json(result);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/orderBy", async (req, res) => {
  try {
    if (!req.query || (req.query.order != "asc" && req.query.order != "desc")) {
      throw("Error: query not valid")
    }
    console.log(req.query.order);
    const todoList = await services.orderBy_service(req.query.order);
    return res.status(200).send(todoList);
  } catch (err) {
    return res.status(400).send(err);
  }
});

router.get("/filterBy", async (req, res) => {
  try {
    const todoList = await services.filterBy_service(req.query.filter);
    return res.json(todoList);
  } catch (err) {
    return res.json(err);
  }
});

module.exports = router;
