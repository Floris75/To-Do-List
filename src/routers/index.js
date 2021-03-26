const express = require("express");

const listController = require("../controllers/listController");

const router = express.Router();

router.get("/", listController.findAll);
router.get("/task_lists/:id", listController.findOne);
router.post("/task_lists", listController.addOne);
router.get("/tasks/:idTask", listController.detailOne);
router.post("/task_lists/:id/tasks", listController.addOneTask);
router.post("/task_lists/:id/tasks", listController.updateTaskDone);

module.exports = router;