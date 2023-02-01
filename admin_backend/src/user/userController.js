var userService = require('./userService'); 

// create a method 
var getDataControllerfn = async (req, res) =>
{  
    var user = await userService.getDataFromDBService();
    res.send({"status": true, "data": user});
}

//creating another method
var createUserControllerfn = async(req, res) =>
{
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log("***********");
    console.log(status);
    console.log("*******************");


    if(status){
        res.send({"status": true, "message": "User created successfully !"});
    }else{
        res.send({"status": false, "message":"Error creating user"});
    }

}



//creating  method to update function
var updateUserController = async(req, res) =>
{
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id,req.body);
    if(result){
        res.send({"status": true, "message": "User updated"});
    }else{
        res.send({"status":true, "message": "User not Updated"});
    }

}

//another method
var deleteUserController = async (req, res) =>
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "User Deleteddd"} );
     } else {
         res.send({ "status": false, "message": "User Deleteddd Faileddddddd" });
     }
}



module.exports = {getDataControllerfn, createUserControllerfn,updateUserController,deleteUserController};