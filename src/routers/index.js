const express = require("express");

const listController = require("../controllers/listController");

const router = express.Router();

router.get("/", listController.findAll);

module.exports = router;