import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        index: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://i.ibb.co/5THrMrM/icons8-user-94.png"
    },
    refreshToken: {
        type: String,
    }
}, {
    timestamps: true
})


export const User = mongoose.model("User", userSchema)