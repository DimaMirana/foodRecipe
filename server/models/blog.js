const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//comment under blog
const CommentSchema = new Schema({
    userInfo:{
        type: Schema.Types.ObjectId,
        ref:'users',
        required:[true,'please log in to comment']
    },
    passage:{
        type:String,
        required:[true,'write something']
    }
});

const BlogSchema = new Schema({
    title:{
        type:String,
        required:[true,'give your blog a title']
    },
    category:[{
        type:String,
        default:'review'
    }],
    passage:{
        type:String,
        required:[true,'write something']
    },
    picture:[{
        type:String,
        required:[true,'please upload at least one picture']
    }],
    userID: {
        type: Schema.Types.ObjectId,
        ref:'users',
        required:[true,'log in to post your blog']
    },
    comment:[CommentSchema],
    time:{
        type:Date,
        default:Date.now
    }
});

const Blog = mongoose.model('blog',BlogSchema);
module.exports = Blog;