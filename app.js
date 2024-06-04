require("dotenv").config();
const express = require("express");
const cors = require("cors");
const urlRoutes = require("./src/routes/url.Routes");

const { connect } = require("./src/utils/mongo"); // Asume que db.js está en el mismo directorio

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use(urlRoutes);

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(console.dir);
