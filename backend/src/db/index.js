import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//dusri approach hai mongo db 

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);


    } catch (error) {
        console.log("MONGODB Connection Failed !!! ", error);
        process.exit(1)
    }
}

export default connectDB

//async await ko standardized krne ke litye kuch utils ka use hua hai
//asyncHandler 