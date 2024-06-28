import mongoose, {Schema} from "mongoose";

const rental_requestSchema = new Schema(
    {
        userId: String,
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