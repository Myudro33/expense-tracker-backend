import mongoose from "mongoose";

const incomeSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    icon:{type: String},
    source:{type:String,required:true},
    amount:{type:String,required:true},
    date:{type:Date,default:Date.now}
},{timestamps:true})


export default mongoose.model('Income',incomeSchema)