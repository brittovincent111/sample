var MongoClient = require('mongodb').MongoClient

const signup = function(req, res, next) {
    res.render('signup');
  }
  const login = function(req, res, next) {
    res.render('login');
  }
  const dashboard = function(req, res, next) {
    res.render('dashboard');
  }

  const submit= function(req,res,next){
    console.log(req.body);
    MongoClient.connect('mongodb://localhost:27017',function(err,client){
      if(err){
        console.log('error')
      }
      else{
        
        client.db('userDetails').collection('user').insertOne(req.body)
        console.log('databased connected')
      }
    })
  }




  module.exports={signup,login,dashboard,submit}