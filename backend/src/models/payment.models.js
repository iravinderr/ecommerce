import mongoose, { Schema } from "mongoose";

const paymentSchema = new Schema(
    {
        order: {
            type: Schema.Types.ObjectId,
            ref: "ORDER",
            required: true
        },
        paymentMethod: {
            type: String,
            enum: ["Net Banking", "Credit Card", "Debit Card", "PayPal", "Apple Pay", "Google Pay", "Amazon Pay", "Cash on Delivery", "UPI"],
            required: true
        },
        paymentStatus: {
            type: String, 
            enum: ["Pending", "Completed", "Failed", "Refunded", "Cancelled", "In Progress", "Partially Refunded"],
            required: true 
        },
        amount: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now()
        }
    },

    { timestamps: true }
);

export const PAYMENT = mongoose.model("PAYMENT", paymentSchema);