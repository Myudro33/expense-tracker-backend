import mongoose from "mongoose";


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{});
        console.log('mongo connected');
    }catch(err){
        console.error('error connecting db',err);
        process.exit(1)
    }
}

export default connectDB