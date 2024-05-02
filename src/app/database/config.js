import mongoose from "mongoose";

const Connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology:true})
        console.log("database conncet")
    }
    catch(error){
        console.log("error conncetion database",error.message)
    }
}

export default Connection