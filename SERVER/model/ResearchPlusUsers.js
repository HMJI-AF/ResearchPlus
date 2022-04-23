const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const researchPlusUsersSchema = new Schema({
    userid:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const ResearchPlusUsers = mongoose.model('research_plus_users',researchPlusUsersSchema)
module.exports = ResearchPlusUsers;