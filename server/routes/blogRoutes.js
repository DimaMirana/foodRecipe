const express = require('express');
const mongoose = require('mongoose');
const Blog = require('../models/blog');
const router = express.Router();

//getting all blog
router.get('/',async(req,res)=>{
    try {
        const allBlog = await Blog.find();
        res.json(allBlog);
    } catch (error) {
        console.log(error.message);
    }
});

//write a blog
router.post('/', async (req, res) => {
    const blog = new Blog({
        title: req.body.title,
        category: req.body.category,
        passage: req.body.passage,
        picture:req.body.picture,
        userID:req.body.userID
    });
    try {
        const newBlog = await blog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        console.log(error.message);
    }
});

//get blogs by category
router.get('/category/:category',async(req,res,next)=>{
    var cat = req.params.category;
    console.log(cat);
    Blog.find({category:cat}).then(function(post){
        res.json(post);
    });
})

//get blog by userID
router.get('/id/:id',function(req,res){
    var user = mongoose.Types.ObjectId(req.params.id);
    console.log(user);
    
    Blog.find({userID:user}).then(function(post){
        res.json(post);
    });
});


module.exports = router;