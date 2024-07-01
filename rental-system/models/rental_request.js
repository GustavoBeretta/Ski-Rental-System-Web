import mongoose, {Schema} from "mongoose";

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

console.log(rental_requestSchema)

const RentalRequest = mongoose.models.RentalRequest ||  mongoose.model("RentalRequest", rental_requestSchema)

export default RentalRequest;