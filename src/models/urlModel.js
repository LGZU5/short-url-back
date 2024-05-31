const { Schema, model } = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const urlSchema = new Schema({
  urlOriginal: {
    type: String,
    lowercase: true,
    trim: true,
    required: "Add valid URL",
  },
  urlShort: {
    type: String,
  },
});

urlSchema.pre("save", function (next) {
  this.urlShort = uuidv4().substring(0, 5);
  next();
});

const Url = model("Urls", urlSchema);
module.exports = Url;
