require("dotenv").config();
require("./src/utils/mongo");
const express = require("express");
const cors = require("cors");
const urlRoutes = require("./src/routes/url.Routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(urlRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
