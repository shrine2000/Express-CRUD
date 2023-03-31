const express = require("express");

const {registerUser, currentUser, loginUser} = require("../controllers/userController")

const router = express.Router();


router.post("/register", registerUser)

router.post("/login", loginUser)

router.post("/currrent", currentUser)

module.exports = router;