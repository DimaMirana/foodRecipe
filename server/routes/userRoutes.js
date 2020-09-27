const express = require('express');
const User = require('../models/user');
const router = express.Router();

//getting all user
router.get('/',async(req,res)=>{
    //console.log(req.body)
    try{
        const allUser = await User.find();
        res.json(allUser);
    } catch(error){
        console.log(error.message);
    }
});

//get  userByID
router.get('/:id',function(req,res){
    User.findById({_id:req.params.id}).then(function(user){
        res.json(user);
    });
});

//regester user
router.post('/',async(req,res)=>{
    const user = new User({
        name:req.body.name,
        mail:req.body.mail,
        password:req.body.password
    });
    try{
        const newUser = await user.save();
        res.status(201).json(newUser);
    }catch(error){
        console.log(error.message);
    }
});

//validate login
router.post('/login',async(req,res)=>{
    var info = ({
        name:req.body.name,
        password:req.body.password
    });
    
    try{
       User.findOne(info)
            .then(function (result) {
                res.json(result);
            })
            .catch(function(err){
                res.json('Not found');
            })
    }catch(error){
        console.log(error.message);
    }
    
})

// //update the favRecipe array
// router.patch('/favrecipe/:id',async(req,res)=>{
    
// })

module.exports = router;
