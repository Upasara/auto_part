const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || 8080  //server port
const authRoute = require('./routes/auth-route');
const mongoose =require('mongoose');
const cors = require('cors');


mongoose.set('strictQuery', true);

mongoose.connect('mongodb://127.0.0.1:27017/autoparts', (err) =>{
    if(err){
        console.log("Database is not connected...!");
    }else{
        console.log("Database is connected...");
    }
});

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parser application/json
app.use(bodyParser.json());

app.use(cors());
app.use('/auth', authRoute);

app.get('/',(req, res) =>{
    res.send("welcome guys");
});

app.listen(port, () =>{
    console.log("server connected:", port);
});