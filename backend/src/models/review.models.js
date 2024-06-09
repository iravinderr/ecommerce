import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId,
            ref: "PRODUCT",
            required: true
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "USER",
            required: true
        },
        rating: {
            type: Number,
            min: 1,
            max: 5,
            required: true
        },
        reviewContent: {
            type: String
        }
    },

    { timestamps: true }
);

export const REVIEW = mongoose.model("REVIEW", reviewSchema);