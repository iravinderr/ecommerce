import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
    {
        image: [{
            type: String,
            required: true
        }],
        productName: {
            type: String,
            required: true,
            trim: true
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        seller: {
            type: Schema.Types.ObjectId,
            ref: "USER"
        },
        category: {
            type: Schema.Types.ObjectId,
            ref: "CATEGORY"
        }
    },

    { timestamps: true }
);


export const PRODUCT = mongoose.model("PRODUCT", productSchema);