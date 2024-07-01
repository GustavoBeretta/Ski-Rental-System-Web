import mongoose, { connect } from "mongoose";

// função de conexão ao MongoDB
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI) // URI informada nas variáveis de ambiente
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDB;