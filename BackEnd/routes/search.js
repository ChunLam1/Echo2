const searchController = require("../controllers/searchController.js");
const express = require("express");

const router = express.Router();

router.route("/audio").get(searchController.searchByKeywords);

module.exports = router;
