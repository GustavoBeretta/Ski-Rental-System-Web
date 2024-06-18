import mongoose, {Schema} from "mongoose";

const usersSchema = new Schema(
    {
        id: Number,
        status: String,
        name: String,
    },
    {
        timestamps: true,
    }
);

const users = mongoose.models.users ||  mongoose.model("users", usersSchema)

export default users;