const UrlModel = require("../models/urlModel");

exports.createUrl = async (urlData) => {
  console.log("createUrl service called");
  try {
    console.log(`Creating URL with data: ${JSON.stringify(urlData)}`);
    const url = await UrlModel.create(urlData);
    console.log(`Created URL: ${JSON.stringify(url)}`);
    return url;
  } catch (error) {
    console.error(`Error creating URL: ${error.message}`);
    throw new Error(`Error creating URL: ${error.message}`);
  }
};

exports.getUrl = async (url) => {
  console.log("getUrl service called");
  try {
    console.log(`Getting URL with data: ${url}`);
    const urlDoc = await UrlModel.findOne({ url });
    if (!urlDoc) {
      console.error("URL not found");
      throw new Error("URL not found");
    }
    console.log(`Retrieved URL: ${JSON.stringify(urlDoc)}`);
    return urlDoc;
  } catch (error) {
    console.error(`Error getting URL: ${error.message}`);
    throw new Error(`Error getting URL: ${error.message}`);
  }
};
