const Item = require("../../models/Item");

async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    await Item.deleteOne({ id: id });

    return res.status(201).json({
      msg: "Item deleted successfully",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = deleteItem;
