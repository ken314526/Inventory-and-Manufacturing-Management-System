const Item = require("../../models/Item");

async function addItem(req, res) {
  try {
    const { id, name, stock } = req.body;

    const it = { id, name, stock };

    const item = new Item(it);
    const itemSave = await item.save();

    return res.status(201).json({
      msg: "Item added successfully",
      data: itemSave,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = addItem;
