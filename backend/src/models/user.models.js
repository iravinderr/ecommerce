import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            enum: ["Customer", "Seller"],
            required: true
        },
        verified: {
            type: Boolean,
            required: true,
            default: false
        },
        refreshToken: {
            type: String
        },
        phoneNo: {
            type: String
        },
        gender: {
            type: String,
            enum: ["Male", "Female", "Other"]
        },
        DOB: {
            type: Date,
        },
        address: {
            type: String
        }
    },

    { timestamps : true }
);

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});

userSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            fullName: this.fullName,
            email: this.email,
            role: this.role,
            verified: this.verified
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
}

export const USER = mongoose.model("USER", userSchema);