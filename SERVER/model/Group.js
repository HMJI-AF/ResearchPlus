const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const passwordComplexity = require('joi-password-complexity');
const Joi = require('joi');

const GroupSchema = new Schema({

    person1 : {
        type : String,
        required : true
    },
    person2 : {
        type : String,
        required : true
    },
    person3 : {
        type : String,
        required : true
    },
    person4 : {
        type : String,
        required : true
    },
})

const Group = mongoose.model("Group",GroupSchema);

module.exports = Group;