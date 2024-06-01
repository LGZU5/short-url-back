const UrlModel = require("../models/urlModel");

exports.createUrl = async (urlData) => {
  try {
    const url = await UrlModel.create(urlData);
    return url;
  } catch (error) {
    console.error(`Error creating URL: ${error.message}`);
    throw new Error(`Error creating URL: ${error.message}`);
  }
};

exports.getUrl = async (urlShort) => {
  try {
    const urlDoc = await UrlModel.findOne({ urlShort: urlShort });
    if (!urlDoc) {
      throw new Error("URL not found");
    }
    return urlDoc;
  } catch (error) {
    throw new Error(`Error getting URL: ${error.message}`);
  }
};
