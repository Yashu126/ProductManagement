import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.mongoose_url)
    }
    catch(error){
        process.exit(1);
    }
}