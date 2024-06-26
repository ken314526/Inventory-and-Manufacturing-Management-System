const Order = require("../../models/Order");

async function readOrders(req, res) {
  try {
    const orders = await Order.find({});

    return res.status(200).json({
      msg: "Orders extracted",
      items: orders,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
}

module.exports = readOrders;
