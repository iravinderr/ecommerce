import mongoose, { Schema } from "mongoose";

const orderSchema = new Schema(
    {
        customer: {
            type: Schema.Types.ObjectId,
            ref: "USER"
        },
        orderStatus: {
            type: String, 
            enum: ["Pending", "Confirmed", "Shipped", "Out for Delivery", "Delivered", "Cancelled", "Returned", "Refunded"], 
            required: true 
        },
        amount: {
            type: Number,
            required: true
        },
        
    },

    { timestamps: true }
);

export const ORDER = mongoose.model("ORDER", orderSchema);