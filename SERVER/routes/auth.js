const router = require('express').Router();
const { ResearchPlusUser } = require('../model/ResearchPlusUsers');
const Joi = require("joi")
const bcrypt = require('bcrypt')

router.post('/',async (req,res)=>{
    try{
        const {error} = validate(req.body);
        console.log(req.body)
        if(error){
            return res.status(400).send({message:error.details[0].message})
        }else{
            const user = await ResearchPlusUser.findOne({email:req.body.email});
            if(!user){
                console.log("Inside")
                return res.status(401).send({message: "Invalid Email or Password"})
            }else{
                console.log(user)
                const validPassword = await bcrypt.compare(
                    req.body.password, user.password
                );
                
                if(!validPassword){
                    return res.status(401).send({message: "Invalid password"})
                }else{
                    const token = user.generateAuthToken();
                    res.status(200).send({data:token,message:"Logged in Successfully"})
                }
            }
        }
    }catch(error){
        res.status(500).send({message: "Internal Server Error"})
    }
})

const validate = (data) =>{
   const schema = Joi.object({
       email: Joi.string().email().required().label("Email"),
       password: Joi.string().required().label("Email")
   });
   return schema.validate(data);
}

module.exports = router;