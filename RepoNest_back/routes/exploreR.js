const express = require("express")
const { Explore_Repo } = require("../controllers/exploreC")
const router = express.Router()

router.get("/repos/:language",Explore_Repo)

module.exports = router