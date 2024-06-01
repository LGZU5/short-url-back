const urlServices = require("../services/urlServices");

exports.createUrl = async (req, res) => {
  try {
    const { url } = req.body;
    const urlResult = await urlServices.createUrl({ urlOriginal: url });
    res.status(201).json({ url: urlResult });
  } catch (error) {
    console.error(`Error in createUrl: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

exports.getUrl = async (req, res) => {
  try {
    const urls = await urlServices.getUrl();
    res.status(200).json({ urls });
  } catch (error) {
    console.error(`Error in getUrl: ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};
