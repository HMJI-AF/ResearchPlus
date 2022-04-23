const router = require("express").Router();
let ResearchPlusUser = require('../model/ResearchPlusUsers');

router.route("/add").post((req,res)=>{
    const {userid,email,password,isVerified} = req.body;

    const newUser = new ResearchPlusUser({
        userid,
        email,
        password,
        isVerified
    })

    newUser.save().then(()=>{
        console.log("User Added");
        res.status(200).send({ status: "User added" });
    }).catch((err)=>{
        console.log(err)
        res.status(500).json({status:"User did not Add"})
    })
})

router.route("/").get((req,res)=>{
    ResearchPlusUser.find().then((user)=>{
        res.status(200).send({ user });
    }).catch((err)=>{
        res.status(500).json({status:"User did not fetch",err})
    })
})

module.exports = router;