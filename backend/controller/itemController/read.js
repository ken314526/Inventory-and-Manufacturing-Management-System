const Item = require("../../models/Item");

async function readItems(req, res) {
  try {
    const items = await Item.find({});

    res.status(200).json({
      msg: "Items extracted",
      items: items,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = readItems;
