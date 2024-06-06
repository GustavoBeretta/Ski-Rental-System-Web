import mongoose, {Schema} from "mongoose";

const rental_requestSchema = new Schema(
    {
        id: Number,
        status: String,
    },
    {
        timestamps: true,
    }
);

const RentalRequest = mongoose.models.RentalRequest ||  mongoose.model("RentalRequest", rental_requestSchema)

export default RentalRequest;