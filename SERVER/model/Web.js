const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const webSchema = new Schema({

    header: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    fUrl: {
        type: String
    },
    iUrl: {
        type: String
    },
    vUrl: {
        type: String
    },
    fName: {
        type: String
    },
    iName: {
        type: String
    },
    vName: {
        type: String
    },
})

const Web = mongoose.model( 'web', webSchema);

module.exports = Web;