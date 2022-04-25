const router = require("express").Router();
let {ResearchPlusUser,validate} = require('../model/ResearchPlusUsers');
const bcrypt = require('bcrypt')

router.post('/add',async (req,res)=>{
    try{
        // console.log(req.body)
        const {error} = validate(req.body);
        if(error){
            console.log("Problem with credentials")
            console.log(req.body)
            console.log(error.details[0].message)
            return (res.status(400).send({message: error.details[0].message}))
            // console.log(error.details[0].message)
        }else{
            const user = await ResearchPlusUser.findOne({email:req.body.email});

            if(user){
                return res.status(409).send({message: "User with given email already exists"})
            }else{
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
            const hashPassword = await bcrypt.hash(req.body.password,salt)

            await new ResearchPlusUser({...req.body, password: hashPassword}).save()
            res.status(201).send({message: "User created Successfully"})
        }
        }
    }catch (error){
        res.status(500).send({message: "Internal Server Error"})
    }
})

module.exports = router;