const express = require("express");
const router = express.Router();
const urlController = require("../controllers/urlController");

router.post("/short-url", urlController.createUrl);
router.get("/getUrl", urlController.getUrl);

module.exports = router;
