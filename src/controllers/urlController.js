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
    const urlShort = req.params.url;
    const urlDoc = await urlServices.getUrl(urlShort);
    if (!urlDoc) {
      return res.status(404).json({ message: "URL not found" });
    }
    res.redirect(urlDoc.urlOriginal);
  } catch (error) {
    console.error(`Error in getUrl: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
};
