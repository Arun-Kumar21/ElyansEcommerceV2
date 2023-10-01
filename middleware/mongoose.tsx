import mongoose from "mongoose";

const connectDb = async() => {
   try {
       await mongoose.connect(process.env.MONGO_URI || "mongodb://0.0.0.0:27017/eLYans-ECommerce");
   } catch (error) {
       console.log(error)
   }  
}


export default connectDb;