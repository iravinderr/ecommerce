import mongoose, { Schema } from "mongoose";

const cartSchema = new Schema(
    {

    },
    
);

export const CART = mongoose.model("CART", cartSchema);