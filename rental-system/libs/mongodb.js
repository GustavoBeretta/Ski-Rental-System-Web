import mongoose, { connect } from "mongoose";

const connectMongoDB = async () => {
    try {
        console.log()
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDB;