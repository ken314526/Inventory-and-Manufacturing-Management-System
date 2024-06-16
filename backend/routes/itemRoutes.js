const express = require("express");
const detail = require("../controller/itemController/detail");
const add = require("../controller/itemController/add");
const router = express.Router();

router.get("/", detail);
router.post("/", add);

module.exports = router;
