var express = require('express');
const User = require('../models/user-model');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//POST /users/register
router.post('/register', async(req, res)=>{

  const{ name, email, phone, address, password} = req.body

  const existingUser = await User.findOne({where: { email: email }})

  if(existingUser){
    res.json({
      sucess: false,
      message: "User already registered"
    })
  }else{
    await User.create(req.body)
    res.json({
      success: true,
      message: "User registered"
    })
  }
})


//POST users/login
router.post('/login', async(req, res)=>{
  const{ email, password} = req.body

  const existingUser = await User.findOne({where: { email: email }})

  if(!existingUser){
    res.json({
      sucess: false,
      message: 'User not registered'
    })
  }else{
    if(email === existingUser.email & password === existingUser.password){
      req.session.regenerate((err)=>{
        if(err) next (err)

        req.session.email = existingUser.email,
        req.session.id = existingUser.id

        req.session.save((err)=>{
          if(err) next (err)

          res.json({
            success: true,
            message: "User logged in"
          })
        })
      })
    }else{
      res.json({
        status: false,
        message: "Email and password doesnot match"
      })
    }
  }
})



module.exports = router;
