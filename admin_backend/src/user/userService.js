var userModel = require('./userModel');
// get the data from the databse 
module.exports.getDataFromDBService = () =>
{
    return new Promise(function checkURL(resolve, reject)
    {
        userModel.find({}, function returnData(error, result)
        {
            if(error){
                reject(false);
            }else{
                resolve(result);
            }
        });
    });
}

// add the data to the database 
module.exports.createUserDBService = (userDetails) =>
{
    return new Promise(function myFunction(resolve, reject){ //Promise -  one who manage the request 
        var userModelData = new userModel();
        userModelData.pname = userDetails.pname;
        userModelData.vmodel = userDetails.vmodel;
        userModelData.pdetails = userDetails.pdetails;
        userModelData.pprice = userDetails.pprice;
        userModelData.image = userDetails.image;
        userModelData.vcato = userDetails.vcato;

        userModelData.save(function resultHandle(error, result){
            if(error){
                reject(false);
            }else{
                resolve(true);
            }
        }); 
    });

}

//to update data from the database
module.exports.updateUserDBService = (id,userDetails) => {    
    console.log(userDetails);
    return new Promise(function myFunction(resolve, reject) {
        userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
    });
}

//user delete function
module.exports.removeUserDBService = (id) => {
    return new Promise(function myFunction(resolve, reject) {
        userModel.findByIdAndDelete(id, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
}