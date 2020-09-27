const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('../models/recipe');
const router = express.Router();

//getting all recipe
router.get('/', async (req, res) => {
    try {
        const allRecipe = await Recipe.find();
        res.json(allRecipe);
    } catch (error) {
        console.log(error.message);
    }
});

//write a recipe to databse
router.post('/',async(req,res)=>{
    const recipe = new Recipe({
        title: req.body.title,
        picture: req.body.picture,
        description:req.body.description,
        review:req.body.review,
        ingredients:req.body.ingredients,
        authorID:req.body.authorID,
        steps: req.body.steps,
        cuisineCategory: req.body.cuisineCategory,
        cookingMethod:req.body.cookingMethod,
        cookingTime:req.body.cookingTime,
        recipeCategory:req.body.recipeCategory,
        recipeDifficulty:req.body.recipeDifficulty,
        serving: req.body.serving
    });
    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.log(error.message);
    }
})

//get recipe by cuisine category
router.get('/cuisine/:category',async(req,res,next)=>{
    var cat = req.params.category;
    console.log(cat);
    Recipe.find({cuisineCategory:cat}).then(function(post){
        res.json(post);
    });
});

//get recipe by difficulty
router.get('/difficulty/:difficulty',async(req,res,next)=>{
    var cat = req.params.difficulty;
    console.log(cat);
    Recipe.find({recipeDifficulty:cat}).then(function(post){
        res.json(post);
    });
});

//get recipe by cooking method
router.get('/method/:method',async(req,res,next)=>{
    var cat = req.params.method;
    console.log(cat);
    Recipe.find({cookingMethod:cat}).then(function(post){
        res.json(post);
    });
});

//get recipe by recipe category
router.get('/category/:category',async(req,res,next)=>{
    var cat = req.params.category;
    console.log(cat);
    Recipe.find({recipeCategory:cat}).then(function(post){
        res.json(post);
    });
});

//get all recipe by the recipe-maker
router.get('/id/:id',function(req,res){
    var user = mongoose.Types.ObjectId(req.params.id);
    console.log(user);
    
    Recipe.find({authorID:user}).then(function(post){
        res.json(post);
    });
});

//get all unique cuisine name
router.get('/cuisine/',async(req,res)=>{
    Recipe.distinct('cuisineCategory').then(function(body){
        res.send(body);
    })
});

//get all unique recipe category name
router.get('/recipe/',async(req,res)=>{
    Recipe.distinct('recipeCategory').then(function(body){
        res.send(body);
    })
});

//get all unique cooking methods name
router.get('/method/',async(req,res)=>{
    Recipe.distinct('cookingMethod').then(function(body){
        res.send(body);
    })
});

//get all review and food name that one user gives
router.get('/reviews/:id',async(req,res)=>{
    var user = mongoose.Types.ObjectId(req.params.id);
    let arr = [];
    
    Recipe.find({"review.userID":user}).then(function(post){
        post.map((item,index)=>{
            console.log(item.title);
            item.review.map((review,item)=>{
                if(review.userID.toString() === user.toString()){
                    arr.push(review);
                }   
            })
        })
        res.json(arr);
    });
})

module.exports = router;