import mongoose from "mongoose";
const connectDB=async()=>{
    try{
        const connect=await mongoose.connect
        ("mongodb://localhost:27017/NIHARIKA",{
        useNewurlparser:true,
        useunifiedtopology:true,    
        });
        console.log(`mongoDBconnect:${connect.connection.host}`);
    }catch(error){
        console.error(`Error:${error.message}`);
        process.exit(1);
    }
    
        
    }
export default connectDB;

