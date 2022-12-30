const mongoose = require("mongoose");

const RepaymentSchema = new mongoose.Schema({
    schedule:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:"Schedule", 
        required: true
    },
    paymentAmount:{
        type:Number,
        required:true
    },
    paymentDate:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model("Repayment", RepaymentSchema);


