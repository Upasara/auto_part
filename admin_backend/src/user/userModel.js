var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create schemas in the database 
var userSchema = new Schema(
    {
        pname:{type:String,required:true},
        vmodel:{type:String,required:true},
        pdetails:{type:String,required:true},
        pprice:{type:String, required:true},
        image:{type:String, required:true},
        vcato:{type:String, required:true}
    }
);

module.exports = mongoose.model('parts', userSchema);
