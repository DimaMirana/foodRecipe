const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');

//ES6 Promises mongoose promise are decapricated
mongoose.Promise = global.Promise;

//mongodb url
const MONGODB_URI = 'mongodb+srv://Dima:49401dima@cluster0.87pru.mongodb.net/foodie?retryWrites=true&w=majority';

const app = express();
const PORT = process.env.PORT || 8080;

mongoose.connect(MONGODB_URI || 'mongodb://localhost/foodie',{
    useNewUrlParser:true,
    useUnifiedTopology:true 
});

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!!!!!!');
});

//HTTP LOGGER
app.use(morgan('tiny')); 

//use express
app.use(express.json());

const userRouter = require('./routes/userRoutes');
app.use('/users',userRouter);

const recipeRouter = require('./routes/recipeRouts');
app.use('/recipes', recipeRouter);

const blogRouter = require('./routes/blogRoutes');
app.use('/blogs', blogRouter);

app.listen(PORT,console.log('server staring at ',PORT));