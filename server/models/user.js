const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true,'please enter your name']
    },
    mail:{
        type:String,
        required:[true,'please enter your mail address']
    },
    password:{
        type:String,
        required:[true,'enter your password']
    },
    favRecipe: [{
        type: Schema.Types.ObjectId,
        ref: 'recipes'
    }]
});


const User = mongoose.model('user',UserSchema);
module.exports = User;