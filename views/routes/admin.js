const express = require("express");
const { adminlogin, admindashboard, adminloginPost, adminlogout } = require("../controller/admin");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.get("/login",adminlogin)
router.post('/login',adminloginPost)
router.get("/dashboard",auth, admindashboard)
router.get('/logout',adminlogout)

module.exports = router;