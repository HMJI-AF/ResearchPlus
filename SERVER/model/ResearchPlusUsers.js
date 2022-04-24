const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchPlusUsersSchema = new Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isVerified:{
        type:Boolean,
        required:true
    }
})

const ResearchPlusUser = mongoose.model("researchPlusUsers",researchPlusUsersSchema);

module.exports = ResearchPlusUser;