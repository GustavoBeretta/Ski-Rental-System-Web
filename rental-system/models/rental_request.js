import mongoose, {Schema} from "mongoose";

// Define o esquema para a coleção "rental_requests"
const rental_requestSchema = new Schema(
    {
        userId: String,
        nameUser: String,
        gender: String,
        shoeSize: Number,
        age: Number,
        weight: Number,
        height: Number,
        sport: String,
        status: String,
        ski_board: Boolean,
        boots: Boolean,
        helmet: Boolean
    },
    {
        timestamps: true,
    }
);

const RentalRequest = mongoose.models.RentalRequest ||  mongoose.model("RentalRequest", rental_requestSchema)

export default RentalRequest;