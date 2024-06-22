import mongoose, {Schema} from "mongoose";

const usersSchema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        gender: String,
        shoeSize: Number,
        age: Number,
        weight: Number,
        height: Number
    },
    {
        timestamps: true,
    }
);

const Users = mongoose.models.Users ||  mongoose.model("Users", usersSchema)

export default Users;