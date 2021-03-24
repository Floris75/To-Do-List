const express = require("express");

const listController = require("../controllers/listCrontroller");

const router = express.Router();

router.get("/", listController.findAll);
router.get("/task_lists/:id", listController.findOne);
router.get("/task/:id", listController.MoreDetails);
router.post("/task_lists", listController.addOne);

module.exports = router;