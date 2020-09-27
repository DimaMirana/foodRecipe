const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//stepsSchema for recipe
const StepsSchema = new Schema({
    description:{
        type:String,
        required:[true,'this field is required']
    },
    image:[{
        type:String
    }]
});


//reviewSchema for one review
const ReviewSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'log in to post a review']
    },
    cost: {
        type: Number,
        default: 0
    },
    difficulty: {
        type: Number,
        default: 0
    },
    time: {
        type: Number,
        default: 0
    },
    overAllReview: {
        type: Number,
        default: 0
    },
    reviewTitle: {
        type: String,
        required: [true, 'write something']
    },
    reviewBody: {
        type: String,
        required: [true, 'write something']
    },
    postingTime: {
        type: Date,
        default: Date.now
    }
});


const RecipeSchema = new Schema({
    title:{
        type:String,
        required:[true,'this field is required']
    },
    picture:[{type:String}],
    description:[{type:String}],
    review:[ReviewSchema],
    ingredients:[{
        type:String
    }],
    authorID:{
        type:Schema.Types.ObjectId,
        ref: 'users',
        required:[true,'please login to write review']
    },
    steps:[StepsSchema],
    cuisineCategory:{
        type:String,
        required:[true,'please choose one cuisine']
    },
    cookingMethod:[{
        type:String,
        required:[true,'please choose one cooking method']
    }],
    recipeCategory:{
        type:String,
        required:[true,'please choose one recipe category']
    },
    recipeDifficulty:{
        type:String,
        required:[true,'please choose one difficulty category']
    },
    serving:{
        type:String,
        default:'4 serving'
    },
    cookingTime:{
        type:String,
        required:[true,'please insert the cooking time']
    },
    time: {
        type: Date,
        default: Date.now
    },
});

//create a model
const Recipe = mongoose.model('recipe', RecipeSchema);

module.exports = Recipe;