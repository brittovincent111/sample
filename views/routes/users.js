var express = require('express');
const {login,signup,dashboard,submit}= require("../controller/user")
var router = express.Router();
var MongoClient = require('mongodb').MongoClient



/* GET users listing. */
router.get('/signup', signup );
router.post('/submit', )

router.get('/login',login)

router.get('/dashboard', dashboard)


module.exports = router;
