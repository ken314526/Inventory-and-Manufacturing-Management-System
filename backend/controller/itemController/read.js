const Item = require("../../models/Item");

async function readItems(req, res) {
  try {
    const items = await Item.find({});

    return res.status(200).json({
      msg: "Items extracted successfully",
      items: items,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

async function readOneItem(req, res) {
  try {
    const { id } = req.params;
    const item = await Item.findOne({ id: id });

    if (!item) {
      return res.status(404).json({
        msg: "Items not found.",
        error: true,
      });
    }

    return res.status(200).json({
      msg: "Items extracted successfully",
      items: item,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = { readItems, readOneItem };
