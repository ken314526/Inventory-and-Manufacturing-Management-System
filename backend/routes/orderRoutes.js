const express = require("express");
const readOrders = require("../controller/orderController/read");
const addOrder = require("../controller/orderController/add");
const router = express.Router();

router.get("/", readOrders);
router.post("/", addOrder);

module.exports = router;
