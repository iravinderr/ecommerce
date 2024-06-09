import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: true,
        },
        parentCategory: {
            type: Schema.Types.ObjectId,
            ref: "CATEGORY",
            default: null
        }
    }
);

export const CATEGORY = mongoose.model("CATEGORY", categorySchema);