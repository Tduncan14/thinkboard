
import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config()


export const connectDB = async () => {


    try {
        await mongoose.connect(process.env.MONGO_DB_CONNECTION)

        console.log("db connected")
    }


    catch (error) {

        console.error("ERROR connecting to MONGODB", error)

    }


}