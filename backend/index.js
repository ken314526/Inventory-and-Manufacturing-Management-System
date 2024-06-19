const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();
const db = require("./config/db");

const itemRoutes = require("./routes/itemRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(express.json());

app.use(morgan(":method :url :status"));

db.then(() => console.log("Connected to MongoDB")).catch((error) =>
  console.log(error)
);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    msg: "Server running",
  });
});

app.use("/api/item", itemRoutes);
app.use("/api/order", orderRoutes);

app.listen(PORT, () => {
  console.log("Server runnning at " + PORT);
});
