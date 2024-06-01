const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

// Definir el esquema de URL
const urlSchema = new Schema({
  urlOriginal: {
    type: String,
    lowercase: true,
    trim: true,
    required: "Add valid URL",
  },
  urlShort: {
    type: String,
    unique: true,
    default: () => uuidv4().substring(0, 5), // Generar un valor predeterminado para urlShort
  },
});

const Url = model("Urls", urlSchema);
module.exports = Url;
