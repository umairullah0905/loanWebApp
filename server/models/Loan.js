import mongoose from "mongoose"

const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const LoanSchema = new Schema({

    userId:{
        type:String,
        require:true,
        unique:true,
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    interestRate:{
        type:Number
    },
    userWhoPaid:{
        type:String
    },
    pay:{
        type:Boolean,
        default:false,
    },
},
{timestamps: true},
);

export default mongoose.model("Loan", LoanSchema);