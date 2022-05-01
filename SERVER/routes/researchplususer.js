const router = require("express").Router();
let {ResearchPlusUser,validate} = require('../model/ResearchPlusUsers');
const bcrypt = require('bcrypt');
var nodemailer = require('nodemailer');
const crypto = require('crypto');

router.post('/add',async (req,res)=>{

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const token = crypto.randomBytes(48).toString('hex');

    const link = `http://localhost:3000/verify/${token}`;

    var mailOptions = {
        from: 'researchplus@gmail.com',
        to: req.body.email,
        subject: 'Welcome to Rearch Plus! You successfully created account.',
        text: 'That was easy!',
        html: `<p><em>To veirfy your account please click <a href="${link}" target="_blank" rel="noopener">Here</a>.</em></p>`
    };

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
            }
            
            else{
                transporter.sendMail(mailOptions, async function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                        
                        const salt = await bcrypt.genSalt(Number(process.env.SALT));
                        const hashPassword = await bcrypt.hash(req.body.password,salt)

                        await new ResearchPlusUser({...req.body, password: hashPassword, isVerified: false, token: token}).save()
                        res.status(201).send({message: "User created Successfully"})
                    }
                });
                
            }
        }
    }catch (error){
        res.status(500).send({message: "Internal Server Error"})
    }
})

router.route('/get').get((req, res) => {
    ResearchPlusUser.find().then((home_buildings) => {
        res.json(home_buildings);
    }).catch((err) => {
        console.log(err);
    })
})

router.route("/delete/:id").delete(async (req, res) => {
    let landID = req.params.id;

    await ResearchPlusUser.findByIdAndDelete(landID).then(() => {

        res.status(200).send({status: "data deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "error with delete data", error: err.message});
    })
})

module.exports = router;