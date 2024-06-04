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
  },
});

urlSchema.pre("save", async function (next) {
  let urlShort;
  let urlExists;
  do {
    urlShort = uuidv4().substring(0, 5);
    urlExists = await this.constructor.findOne({ urlShort });
  } while (urlExists);
  this.urlShort = urlShort;
  next();
});

const Url = model("Urls", urlSchema);
module.exports = Url;
