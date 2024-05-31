const urlServices = require("../services/urlServices");

exports.createUrl = async (req, res) => {
  console.log("createUrl called");
  try {
    const { url } = req.body;
    console.log(`Received URL: ${url}`);
    const urlResult = await urlServices.createUrl({ urlOriginal: url });
    console.log(`Created URL: ${JSON.stringify(urlResult)}`);
    res.status(201).json({ url: urlResult });
  } catch (error) {
    console.error(`Error in createUrl: ${error.message}`);
    res.status(400).json({ message: error.message });
  }
};

exports.getUrl = async (req, res) => {
  console.log("getUrl called");
  try {
    const urls = await urlServices.getUrl();
    console.log(`Retrieved URLs: ${JSON.stringify(urls)}`);
    res.status(200).json({ urls });
  } catch (error) {
    console.error(`Error in getUrl: ${error.message}`);
    res.status(404).json({ message: error.message });
  }
};
