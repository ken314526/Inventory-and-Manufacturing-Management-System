const express = require("express");
const detail = require("../controller/orderController/detail");
const add = require("../controller/orderController/add");
const router = express.Router();

router.get("/", detail);
router.post("/", add);

module.exports = router;
