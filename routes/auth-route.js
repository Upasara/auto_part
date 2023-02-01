const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const user = require('../models/user');
const jwt = require('jsonwebtoken');
const checkAuth = require('../mid/check-auth');


router.post('/register',(req, res) =>{
    bcrypt.hash(req.body.password, 10, (err, hash) =>{
        if(err){
            return res.json({success:false, message: "Hashing Error...!"})
        }else{
            const user = new User({
                displayName:req.body.displayName,
                phone:req.body.phone,
                address:req.body.address,
                email:req.body.email,
                password:hash
            })
        
            user.save()
            .then((_) =>{
                res.json({success:true, message:"Account has been created..."})
            })
            .catch((err) =>{
                if(err.code ===11000){
                    return res.json({success:false, message: "Email is Already Exist...!"})
                }
                res.json({success:false, message:"Authentication Failed...!"})
            })

        }
    })

});

router.post('/login',(req, res) =>{
    User.find({email:req.body.email}).exec().then((result) =>{
        if(result.length<1){
            return res.json({success:false, message:"User Not Found...!"})
        }
        const user = result[0];
        bcrypt.compare(req.body.password, user.password,(err, ret) =>{
            if(ret){
                const payload = {
                    userId: user._id
                }
                const token = jwt.sign(payload,"webBatch")
                return res.json({success:true, token:token, message:"Login Successfully..."})
            }else{
                return res.json({success:false, message:"Password does not Match...!"})
            }
        })
    }).catch(err =>{
        res.json({success:false,message:"Authentication Failed...!"})
    })
});

router.get('/profile',checkAuth, (req, res) =>{
    const userId =  req.userData.userId;
    User.findById(userId).exec().then((result) =>{
        res.json({success:true, data:result})
    }).catch(err =>{
        res.json({success:false, message:"Server Error"})
    })
})

module.exports = router