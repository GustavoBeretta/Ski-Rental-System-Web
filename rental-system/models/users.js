import mongoose, {Schema} from "mongoose";

// Define o esquema para a coleção "users"
const usersSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        gender: String,
        shoeSize: Number,
        age: Number,
        weight: Number,
        height: Number,
        role: String
    },
    {
        timestamps: true,
    }
);

const Users = mongoose.models.Users ||  mongoose.model("Users", usersSchema)

export default Users;