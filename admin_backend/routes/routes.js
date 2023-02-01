var express = require('express');
var userController = require('../src/user/userController');

const router = express.Router();

router.route('/user/getAll').get(userController.getDataControllerfn);
router.route('/user/create').post(userController.createUserControllerfn);
//first to the controller , then to the service
router.route('/user/update/:id').patch(userController.updateUserController); 

//to delete a file
router.route('/user/delete/:id').delete(userController.deleteUserController);

module.exports = router;
