var express = require('express');
var server = express();
var mongoose = require('mongoose');
// add the path of the routes
var routes = require('./routes/routes');
const cors = require('cors');


mongoose.set('strictQuery', true);

mongoose.connect("mongodb://127.0.0.1:27017/autoparts", {useNewUrlParser: true, useUnifiedTopology: true},function checkDB(error){
    if(error){
        console.log("DB error")
    }
    else{
        console.log("DB started")
    }
});

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8000, function check(error){
    if(error){
        console.log("error")
    }
    else{
        console.log("started")
    }
});
