const express = require("express");

const listController = require("../controllers/listCrontroller");

const router = express.Router();

router.get("/", listController.findAll);
router.get("/task_lists/:id", listController.findOne);
router.get("/task/:id", listController.MoreDetails);
router.post("/task_lists", listController.addList);
router.post("/task_lists/:id/tasks", listController.addTask);
router.get("/task_lists/:id/delete", listController.removeList);
router.get("/task_lists/:id_list/task/:id_task/delete", listController.removeTask);
router.post("/task/:id/description_update", listController.updateDescription);
router.post("/task/:id/done_update", listController.updateDone);


module.exports = router;