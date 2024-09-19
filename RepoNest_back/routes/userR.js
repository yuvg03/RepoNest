const express = require("express")
const { Profile_Repo, Like_Profile, get_likes } = require("../controllers/userC")
const {checkAuthenticated} = require('../middleware/checkAuthenticated')
const router = express.Router()

console.log(Profile_Repo, Like_Profile, get_likes);


router.get("/profiles/:username",Profile_Repo)
// router.get("/likes",checkAuthenticated, get_likes)
// router.post("/like/:username",checkAuthenticated, Like_Profile)

module.exports = router