const router = require('express').Router();
const { ResearchPlusUser } = require('../model/ResearchPlusUsers');
const Joi = require("joi")
const bcrypt = require('bcrypt');

router.post('/',async (req,res)=>{
    try{
        const {error} = validate(req.body);
        const user = await ResearchPlusUser.findOne({email:req.body.email});

        if(error){
            return res.status(400).send({message:error.details[0].message})
        }
        else if(!user){
            return res.status(401).send({message: "Invalid Email or Password"})
        }
        else if(user.isVerified != true){
			return res.status(401).send({ message: "Please check your email to verify." });
		}        
        else{
            const username = user.email.split('@')[0];
            console.log("User - " + username + " logged In")
            // console.log(user._id)
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );
            
            if(!validPassword){
                return res.status(401).send({message: "Invalid password"})
            }else{
                const token = user.generateAuthToken();
                res.status(200).send({data:user._id,dataRole:user.role,message:"Logged in Successfully"});
                // localStorage.setItem('userLoginToken', token);
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

router.route("/verify/:token").post( async (req, res) => {
	try {
		
		let token = req.params.token;

		await ResearchPlusUser.findOneAndUpdate(
			{ token: token },
			{ isVerified: true },
			{}
		);		

		res.status(200).send({ message: "logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

router.route("/checkpw").post(async (req,res)=>{
    try{
        const user = await ResearchPlusUser.findOne({token:req.body.token});
        if(!user){
            console.log("Error with fetching user")
            return res.status(401).send({message: "Invalid Email or Password"})
            
        }
        else if(user.isVerified != true){
			return res.status(401).send({ message: "Please check your email to verify." });
		}        
        else{
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            );
            
            if(!validPassword){
                return res.status(401).send({message: "Invalid password"})
            }else{
                const username = user.email.split('@')[0];
                console.log("User - " + username + " logged In")
                res.status(200).send({userId:user._id, userEmail:user.email, message:"Logged in Successfully"});
                // localStorage.setItem('userLoginToken', token);
            }
        }
        
    }catch(error){
        res.status(500).send({message: "Internal Server Error"})
    }
})



module.exports = router;