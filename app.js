require("dotenv").config();
require("./src/utils/mongo");
const express = require("express");
const cors = require("cors");
const sendUrl = require("./src/routes/shortUrl.routes");
const getUrl = require("./src/routes/getUrl.routes");

const app = express();
app.use(cors());
app.use(express.json());

app.use(sendUrl);
app.use(getUrl);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
