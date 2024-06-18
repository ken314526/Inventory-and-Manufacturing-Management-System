const Order = require("../../models/Order");

async function addOrder(req, res) {
  try {
    const { id, customer, items, status } = req.body;
    const od = { id, customer, items, status };

    const order = new Order(od);
    const orderSave = await order.save();

    return res.status(201).json({
      msg: "Order added successfully",
      data: orderSave,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = addOrder;
