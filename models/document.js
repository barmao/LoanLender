const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    loan: {
        type:mongoose.Schema.Types.ObjectId, 
        required:true
    },
    fileName: {
        type: String, 
        required:true
    },
    fileType: {
        type:String,
        required:true
    },
    fileData: {
        type:Buffer, 
        required:true
    }
});

module.exports =  mongoose.model("Document",DocumentSchema);