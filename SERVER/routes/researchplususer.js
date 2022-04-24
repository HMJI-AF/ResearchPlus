const router = require("express").Router();
let ResearchPlusUser = require('../model/ResearchPlusUsers');

router.route("/add").post((req,res)=>{
    console.log(req.body.email)
    const {email,password,isVerified} = req.body;

    const newUser = new ResearchPlusUser({
        email,
        password,
        isVerified
    })
    
    newUser.save().then(()=>{
        console.log("User Added");
        res.status(200).send({ status: "User added" });
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({status:"Error with adding a user"})
    })
})

router.route("/").get((req,res)=>{
    ResearchPlusUser.find().then((user)=>{
        res.json(user)
    }).catch((err)=>{
        res.status(500).json({status:"User did not fetch",err})
    })
})

module.exports = router;