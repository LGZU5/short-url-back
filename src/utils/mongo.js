// Conexión a la base de datos
const mongoose = require("mongoose");

// URL de conexión a tu base de datos
const dbURL = process.env.MONGO_DB_URL;

// Conexión a la base de datos
mongoose.connect(dbURL);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.log("Error connecting to MongoDB", error);
});
