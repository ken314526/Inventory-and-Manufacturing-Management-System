const Item = require("../../models/Item");

async function updateItem(req, res) {
  try {
    let { id } = req.params;
    const { name, stock } = req.body;

    if (await Item.findOne({ id: id })) {
      const updateResult = await Item.updateOne(
        { id: id },
        {
          $set: { name: name, stock: stock },
          $currentDate: { lastUpdated: true },
        }
      );

      return res.status(200).json({
        message: "Item updated successfully",
        data: updateResult,
        success: true,
      });
    }
    return res.status(404).json({
      message: "Item not found",
      error: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = updateItem;
