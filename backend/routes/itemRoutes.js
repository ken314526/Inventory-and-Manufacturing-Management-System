const express = require("express");
const readItems = require("../controller/itemController/read");
const addItem = require("../controller/itemController/add");
const updateItem = require("../controller/itemController/update");
const deleteItem = require("../controller/itemController/delete");

const router = express.Router();

router.get("/", readItems);
router.post("/", addItem);
router.put("/", updateItem);
router.delete("/", deleteItem);

module.exports = router;
