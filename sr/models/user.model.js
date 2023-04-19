const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    token:{type:String},
});

const User = mongoose.model('User',userSchema);
module.exports = User;