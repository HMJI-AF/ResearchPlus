const router = require("express").Router();
const { response } = require("express");
let Group = require("../model/Group");
let {ResearchPlusUser} = require('../model/ResearchPlusUsers');

router.route("/add").post(async(req,res) => {

    const person1 = req.body.person1;
    const person2 = req.body.person2;
    const person3 = req.body.person3;
    const person4 = req.body.person4;

    const newgroup = new Group({

        person1,
        person2, 
        person3,
        person4
    }) 

    try{

        // const userfind2 = await ResearchPlusUser.findOne({email:req.body.person2});
        // const userfind3 = await ResearchPlusUser.findOne({email:req.body.person3});
        // const userfind4 = await ResearchPlusUser.findOne({email:req.body.person4});

        // if(!userfind2 || !userfind3 || !userfind4 ){
        //     return res.status(409).send({message: " given IT number not exists"})
        // }

        const user1 = await Group.findOne({person1:req.body.person1});        
        const user12 = await Group.findOne({person2:req.body.person1});
        const user13 = await Group.findOne({person3:req.body.person1});
        const user14 = await Group.findOne({person4:req.body.person1});


        const user2 = await Group.findOne({person2:req.body.person2});       
        const user22 = await Group.findOne({person1:req.body.person2});
        const user23 = await Group.findOne({person3:req.body.person2});
        const user24 = await Group.findOne({person4:req.body.person2});

        const user3 = await Group.findOne({person3:req.body.person3});
        const user32 = await Group.findOne({person2:req.body.person3});
        const user33 = await Group.findOne({person1:req.body.person3});
        const user34 = await Group.findOne({person4:req.body.person3});

        const user4 = await Group.findOne({person4:req.body.person4});       
        const user42 = await Group.findOne({person2:req.body.person4});
        const user43 = await Group.findOne({person3:req.body.person4});
        const user44 = await Group.findOne({person1:req.body.person4});


         if(user1  || user2  || user3  || user4  ||
            user12 || user22 || user32 || user42 ||
            user13 || user23 || user33 || user43 ||
            user14 || user24 || user34 || user44 ){
            return res.status(409).send({message: "User with given group already exists"})
        }
            
        else{
            newgroup.save().then(()=>{
                res.json("Group Added")
            }).catch((err)=>{
                console.log(err);
            })
                
        }
    }catch (error){
        res.status(500).send({message: "Internal Server Error"})
    }

   

    

})


router.route("/").get((req,res)=>{
    Group.find().then((groups)=>{
        res.json(groups)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:id").put(async (req, res)=>{
    let person1Id = req.params.id;
    const{person1, person2, person3,person4} = req.body;

    const updateGroup = {
        person1,
        person2,
        person3,
        person4
    }

    const update = await Group.findByIdAndUpdate(person1Id, updateGroup)
    .then(()=>{
        res.status(200).send({status:"Group updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})

router.route("/delete/:id").delete(async(req,res)=>{
    let person1Id = req.params.id;

    await Group.findByIdAndDelete(person1Id)
    .them(()=>{
        res.status(200).send({status:"person1 deleted", person1: update})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleted  person1", error: err.message});
    })
})




router.route("/get/:id").get(async (req, res)=> {
    let person1Id = req.parms.id;
    const person1 = await Group.findById(person1Id)
    .then((Group) => {
        res.status(200).send({status:"User fetched", Group})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get  user", error: err.message});

    })
})




module.exports = router;