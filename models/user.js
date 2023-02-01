const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const userShema = new Schema({
    displayName:{type:String},
    phone:{type:String},
    address:{type:String},
    email:{type:String, unique: true},
    password:{type:String, required:true},
    created_at:{type:Number, default:Date.now().valueOf()},
    updated_at:{type:Number, default:Date.now().valueOf()}
});



module.exports = mongoose.model('User', userShema);